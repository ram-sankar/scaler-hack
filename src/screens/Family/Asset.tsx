import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import { mocks } from "../../constants";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import AppIcons from "../../components/AppIcons";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";


function Asset({ navigation }: any) {
    const { theme }: any = useContext(ThemeContext);
    const styles = useStyles(theme);

    const Icon = ({ type }: any) => {
        switch (type) {
            case 'electricity': return <AppIcons Icon='MaterialIcons' color={theme.lightGreen} name="electrical-services" size={24} />
            case 'dth': return <AppIcons Icon='Ionicons' color={theme.lightGreen} name="ios-tv-outline" size={20} />
            case 'broadband': return <AppIcons Icon='FontAwesome5' color={theme.lightGreen} name="inbox" size={20} />
            case 'medInsurance': return <AppIcons Icon='FontAwesome5' color={theme.lightGreen} name="hand-holding-medical" size={20} />
            case 'bikeInsurance': return <AppIcons Icon='FontAwesome5' color={theme.lightGreen} name="motorcycle" size={20} />
            case 'carInsurance': return <AppIcons Icon='Ionicons' color={theme.lightGreen} name="md-car-sport" size={20} />
            default: return <View></View>
        }
    }

    const AssetList = () => (
        <FlatList
            data={mocks.dues}
            renderItem={(due) => (
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={styles.cardIconContainer}>
                            <Icon type={due.item.type} />
                        </View>
                        <View style={styles.itemNameContainer}>
                            <AppText style={styles.itemName}>{due.item.name}</AppText>
                            <AppText style={[styles.daysLeft, { color: due.item.daysLeft < 10 ? theme.tomato : theme.gray10 }]}>{due.item.daysLeft} Days Left</AppText>
                        </View>
                        <View style={styles.amountContainer}>
                            <AppText style={styles.amount}>&#8377;{due.item.amount}</AppText>
                            <AppText style={styles.amountNote}>Bill Amount</AppText>
                        </View>
                    </View>
                </View>
            )}
        />
    )

    return (
        <AppScreen style={styles.container}>
            <View style={styles.topHeadingContainer}>
                <AppText style={[styles.heading]}>Asset Tracker</AppText>
            </View>
            <AssetList />
        </AppScreen>
    )
}

const useStyles = (theme: Themes) => StyleSheet.create({
    container: {
        padding: sizes.padding
    },
    topHeadingContainer: {
        flexDirection: 'row'
    },
    heading: {
        flex: 1,
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20
    },
    line: {
        flexDirection: 'row',
        borderBottomColor: theme.gray2,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    card: {
        flex: 0.5,
        backgroundColor: theme.lightOrange,
        height: 70,
        margin: 10,
        justifyContent: 'space-around',
        borderRadius: 5,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
    },
    itemNameContainer: {
        justifyContent: 'center',
        marginLeft: 15,
        textAlign: 'center',
        flex: 1
    },
    itemName: {
        fontSize: 17,
        fontWeight: '700',
        color: theme.darkGrey,
    },
    daysLeft: {
        color: theme.red,
        fontWeight: '700',
        fontSize: 15
    },
    cardIconContainer: {
        backgroundColor: theme.orange,
        height: 40,
        width: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    cardIcon: {
        fontWeight: '700',
    },
    amountContainer: {
        marginRight: 15,
        justifyContent: 'center',
        minWidth: 80
    },
    amount: {
        fontWeight: '700',
        color: theme.green,
        fontSize: 17,
    },
    amountNote: {
        color: theme.gray,
        fontSize: 13
    },
});

export default Asset;