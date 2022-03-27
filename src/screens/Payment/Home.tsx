import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import { NavigationContext } from '@react-navigation/native';
import AppText from './../../components/AppText';
import routes from "../../navigator/routes";


function PaymentHome() {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation = React.useContext<any>(NavigationContext);

  return (
    <AppScreen style={styles.container}>
      <Pressable onPress={() => navigation.navigate(routes.PAYMENT_TAB, { screen: routes.AMOUNT })}>
            <AppText>Pay</AppText>
      </Pressable>
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
});
export default PaymentHome;