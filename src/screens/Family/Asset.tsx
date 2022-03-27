import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
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

    const AssetListHome = () => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.itemNameContainer}>
                    <AppText style={styles.itemName}>Own House - Chennai</AppText>
                    <AppText style={styles.itemLocation}>Location: 1st Block, Mahatma Gandhi Road, Taramani, Chennai-600 152</AppText>
                    <AppText style={styles.valIncrease}>Purchased: May-2019</AppText>
                    <AppText style={[styles.linkData, { marginTop: 10 }]}>Download Document</AppText>
                    <AppText style={styles.linkData}>More Info</AppText>
                </View>
                <View style={styles.amountContainer}>
                    <AppText style={styles.amount}>&#8377;50 Lakhs</AppText>
                    <AppText style={styles.amountNote}>Puchase Value</AppText>
                    <AppText style={styles.amountSecond}>&#8377;60 Lakhs</AppText>
                    <AppText style={styles.amountNote}>Current Value Value</AppText>
                </View>

            </View>
        </View>
    )

    const AssetListGold = () => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.itemNameContainer}>
                    <AppText style={styles.itemName}>Land Property - Madurai</AppText>
                    <AppText style={styles.itemLocation}>Location: 1st Main Road, TVK Salai, Madurai - 603 142</AppText>
                    <AppText style={styles.valIncrease}>Purchased: May-2018</AppText>
                    <AppText style={[styles.linkData, { marginTop: 10 }]}>Download Document</AppText>
                    <AppText style={styles.linkData}>More Info</AppText>
                </View>
                <View style={styles.amountContainer}>
                    <AppText style={styles.amount}>&#8377;25 Lakhs</AppText>
                    <AppText style={styles.amountNote}>Puchase Value</AppText>
                    <AppText style={styles.amountSecond}>&#8377;26.3 Lakhs</AppText>
                    <AppText style={styles.amountNote}>Current Value Value</AppText>
                </View>

            </View>
        </View>
    )

    const AssetListLand = () => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.itemNameContainer}>
                    <AppText style={styles.itemName}>Gold Ornaments</AppText>
                    <AppText style={styles.itemLocation}>24 Ct Gold Jewellery</AppText>
                    <AppText style={[styles.linkData, { marginTop: 10 }]}>Download Document</AppText>
                    <AppText style={styles.linkData}>More Info</AppText>
                </View>
                <View style={styles.amountContainer}>
                    <AppText style={styles.amount}>75 Poun</AppText>
                    <AppText style={styles.amountNote}>Total Weight</AppText>
                    <AppText style={styles.amountSecond}>&#8377;38,624</AppText>
                    <AppText style={styles.amountNote}>Current Rate/Poun</AppText>
                </View>

            </View>
        </View>
    )

    return (
        <AppScreen style={styles.container}>
            <View style={styles.topHeadingContainer}>
                <AppText style={[styles.heading]}>Asset Tracker</AppText>
            </View>
            <AssetListHome />
            <AssetListGold />
            <AssetListLand />
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
        marginBottom: 20,
        marginTop: 15,
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%'
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
    itemLocation: {
        marginRight: 10
    },
    amountSecond: {
        fontWeight: '700',
        color: theme.green,
        marginTop: 15,
        fontSize: 17,
    },
    valIncrease: {
        fontWeight: '700',
        color: theme.green,
        marginTop: 15,
        fontSize: 15,
    },
    linkData: {
        color: theme.blue,
        fontSize: 12,
        marginTop: 3,
        textDecorationLine: 'underline'
    },
    valModerate: {
        fontWeight: '700',
        color: theme.orange,
        marginTop: 15,
        fontSize: 15,
    },
});

export default Asset;