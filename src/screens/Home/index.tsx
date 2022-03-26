import React, { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import AppIcons from './../../components/AppIcons';
import AppText from './../../components/AppText';


function Explore({navigation}: any) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  const Family = () => (
    <View style={[styles.card, {backgroundColor: theme.lightBlue}]}>
      <Pressable onPress={() => navigation.navigate("Family")}>
        <View style={styles.cardContent}>
          <AppIcons Icon='MaterialIcons' color={theme.blue} name="family-restroom" size={24} />
          <View style={styles.itemNameContainer}>
            <AppText style={styles.itemName}>My Family</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <Family />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10
  },
  card: {
    width: '100%',
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
  itemName: {
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 15,
    textAlign: 'center',
    color: theme.darkGrey
  },
  itemNameContainer: {
    width: 100,
  }
});
export default Explore;