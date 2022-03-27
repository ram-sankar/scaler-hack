import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../routes';
import styles from "../../constants/styles";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import PaymentHome from '../../screens/Payment/Home';
import Amount from '../../screens/Payment/Amount';

const PaymentStack = createNativeStackNavigator();

export default function PaymentNavigator({ navigation, route }: Props) {

  const routeName = getFocusedRouteNameFromRoute(route) || '';
  const tabShouldNotVisible = [routes.INSURANCE, routes.INSURANCE_DETAILS, routes.INSURANCE_HOME, routes.DUES]

  React.useLayoutEffect(() => {
    if (tabShouldNotVisible.includes(routeName)){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {...styles.tabBarStyle, display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <PaymentStack.Navigator screenOptions={{headerShown: false}}>
      <PaymentStack.Screen name={routes.PAYMENT_HOME} component={PaymentHome} />
      <PaymentStack.Screen name={routes.AMOUNT} component={Amount} />
    </PaymentStack.Navigator>
  );
}

interface Props {
  navigation: any, 
  route: any
}