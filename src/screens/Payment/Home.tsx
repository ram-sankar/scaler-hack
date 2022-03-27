import React, { useContext } from "react";
import { Pressable, FlatList, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import { NavigationContext } from '@react-navigation/native';
import AppText from './../../components/AppText';
import routes from "../../navigator/routes";

import AppIcons from './../../components/AppIcons';

import { mocks } from "../../constants";


function PaymentHome() {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation = React.useContext<any>(NavigationContext);

  const RenderPaymentIcons = () => (
    <FlatList
      data={mocks.payMenu}
      renderItem={(category) => (
        <View style={[styles.cardSmall, { backgroundColor: theme.appBackGround }]}>
          <Pressable onPress={() => navigation.navigate(routes.PAYMENT_TAB, { screen: routes.AMOUNT })}>
            <View style={styles.cardContent}>
              <AppIcons Icon={category.item.family} color={theme.blue} name={category.item.icon} size={28} />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.itemNameContainer}>
                <AppText style={styles.itemName}>{category.item.name}</AppText>
              </View>
            </View>
          </Pressable>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
    />
  )

  return (
    <AppScreen style={styles.container}>
      {/* <Pressable onPress={() => navigation.navigate(routes.PAYMENT_TAB, { screen: routes.AMOUNT })}>
        <AppText>Pay</AppText>
      </Pressable> */}
      <RenderPaymentIcons />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  cardSmall: {
    width: '33%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  itemName: {
    fontWeight: '600',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
    color: theme.darkGrey
  },
  itemNameContainer: {
    width: 100,
  }
});

export default PaymentHome;