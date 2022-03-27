import React, { useContext } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import AppText from '../../components/AppText';
import AppIcons from './../../components/AppIcons';
import { mocks } from "../../constants";
import routes from "../../navigator/routes";
import { NavigationContext } from '@react-navigation/native';


function Family() {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation = React.useContext<any>(NavigationContext);

  const RenderItem = () => (
    <FlatList
      data={mocks.categories}
      renderItem={(category) => (
        <View style={[styles.card, { backgroundColor: theme[category.item.bg] }]}>
          <Pressable onPress={() => navigation.navigate(category.item.navigateTo, { name: category.item.name })}>
            <View style={styles.cardContent}>
              <AppIcons Icon={category.item.iconType} color={theme[category.item.color]} name={category.item.iconName} size={24} />
              <View style={styles.itemNameContainer}>
                <AppText style={styles.itemName}>{category.item.name}</AppText>
              </View>
            </View>
          </Pressable>
        </View>
      )}
      numColumns={2}
    />
  )

  const Family = () => (
    <View style={[styles.card, { backgroundColor: theme.lightBlue }]}>
      <Pressable onPress={() => navigation.navigate(routes.FAMILY_TAB, { screen: routes.MEMBERS })}>
        <View style={styles.cardContent}>
          <AppIcons Icon='MaterialIcons' color={theme.blue} name="family-restroom" size={24} />
          <View style={styles.itemNameContainer}>
            <AppText style={styles.itemName}>My Family</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  const BillDues = () => (
    <View style={[styles.card, { backgroundColor: theme.lightViolet }]}>
      <Pressable onPress={() => navigation.navigate(routes.FAMILY_TAB, { screen: routes.DUES })}>
        <View style={styles.cardContent}>
          <AppIcons Icon='Ionicons' color={theme.violet} name="document-text-outline" size={24} />
          <View style={styles.itemNameContainer}>
            <AppText style={styles.itemName}>Bill Dues</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  const AssetList = () => (
    <View style={[styles.card, { backgroundColor: theme.lightOrange2 }]}>
      <Pressable onPress={() => navigation.navigate(routes.FAMILY_TAB, { screen: routes.ASSET_TRACK })}>
        <View style={styles.cardContent}>
          <View>
            <AppText style={styles.itemName}>Asset Tracker</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <Family />
      <BillDues />
      <AssetList />
      <RenderItem />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingHorizontal: 10
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.gray2,
    borderBottomWidth: 1,
  },
  line: {
    flexDirection: 'row',
    borderBottomColor: theme.gray2,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  tab: {
    padding: 13,
  },
  active: {
    borderBottomColor: theme.primary,
    borderBottomWidth: 5,
  },
  activeTabText: {
    fontWeight: '700',
    color: theme.primary,
  },
  normalTabText: {
    fontWeight: '700',
    color: theme.gray,
  },
  card: {
    flex: 0.5,
    height: 100,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  cardImageContainer: {
    backgroundColor: theme.lightGreen,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 15,
    textAlign: 'center',
    color: theme.darkGrey
  },
  itemCount: {
    fontSize: 15,
    color: theme.gray2
  },
  itemNameContainer: {
    width: 100,
  }
});
export default Family;