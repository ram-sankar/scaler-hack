import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../routes';
import styles from "../../constants/styles";
import Family from '../../screens/Family';
import Insurance from '../../screens/Family/Insurance';
import InsuranceDetails from '../../screens/Family/InsuranceDetails';
import InsuranceHome from '../../screens/Family/InsuranceHome';
import Dues from '../../screens/Family/Dues';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const FamilyStack = createNativeStackNavigator();

export default function FamilyNavigator({ navigation, route }: Props) {

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
    <FamilyStack.Navigator screenOptions={{headerShown: false}}>
      <FamilyStack.Screen name={routes.FAMILY} component={Family} />
      <FamilyStack.Screen name={routes.INSURANCE} component={Insurance} />
      <FamilyStack.Screen name={routes.INSURANCE_DETAILS} component={InsuranceDetails} />
      <FamilyStack.Screen name={routes.INSURANCE_HOME} component={InsuranceHome} />
      <FamilyStack.Screen name={routes.DUES} component={Dues} />
    </FamilyStack.Navigator>
  );
}

interface Props {
  navigation: any, 
  route: any
}