import React, { useContext } from "react";
import { Button, FlatList, Pressable, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import AppIcons from './../../components/AppIcons';
import AppText from './../../components/AppText';

import { mocks } from "../../constants";

import {
  LineChart
} from "react-native-chart-kit";

const data = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  datasets: [
    {
      data: [20, 35, 25, 27, 22, 30],
      color: (opacity = 1) => "#670FC0", // optional
      strokeWidth: 2 // optional
    },
    {
      data: [18, 27, 29, 20, 25, 26],
      color: (opacity = 1) => `rgba(35, 23, 84)`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Budget", "Actual Spending"] // optional
};

function Explore({ navigation }: any) {

  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  const Family = () => (
    <View style={[styles.card, { backgroundColor: theme.lightBlue }]}>
      <Pressable onPress={() => navigation.navigate("Family")}>
        <View style={styles.cardContent}>
          <AppText style={{ fontWeight: 'bold' }}>MY NET WORTH</AppText>
        </View>
        <View style={styles.cardContent}>
          <AppText style={{ fontWeight: 'bold', fontSize: 27 }}>₹ 45,145</AppText>
        </View>
      </Pressable>
    </View>
  )

  const ChartLine = () => (
    <View>
      <LineChart
        data={data}
        width={375}
        height={220}
        chartConfig={{
          backgroundColor: "#e26ae0",
          backgroundGradientFrom: theme.lightOrange.toString(),
          backgroundGradientTo: theme.lightOrange2.toString(),
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
      />
    </View>
  )

  const RenderHomeMenuIcons = () => (
    <FlatList
      data={mocks.homeInvestmentMenu}
      renderItem={(category) => (
        <View style={[styles.cardSmall, { backgroundColor: theme.appBackGround }]}>
          <Pressable onPress={() => navigation.navigate('', { name: category.item })}>
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
      numColumns={3}
    />
  )

  return (
    <AppScreen>
      <Family />
      <ChartLine />
      <RenderHomeMenuIcons />
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
    marginBottom: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center'
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


export default Explore;