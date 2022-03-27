import React, { useContext, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";
import AppIcons from './../../components/AppIcons';
import AppText from './../../components/AppText';

import { mocks } from "../../constants";

import {
  LineChart
} from "react-native-chart-kit";
import personal from "../../api/personal";

const data = {
  labels: ["Bills", "Shop", "Fun", "Rent", "Loan", "Others"],
  datasets: [
    {
      data: [10000, 15000, 2500, 12500, 20000, 10000],
      color: (opacity = 1) => "#670FC0", // optional
      strokeWidth: 2 // optional
    },
    {
      data: [8000, 9500, 2900, 12500, 20000, 11500],
      color: (opacity = 1) => `rgba(35, 23, 84)`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Budget", "Actual Spends"] // optional
};

function Explore({ navigation }: any) {
  const [personalWorth, setPersonalWorth] = useState<any>(null)
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  useEffect(() => {
    getNetWorth()
  },[])
  
  const getNetWorth = async () => {
    const res: any = await personal.getNetWorth()
    setPersonalWorth(res?.data?.data?.[0].worth)
  }

  const Family = () => (
    <View style={[styles.card, { backgroundColor: theme.lightViolet2 }]}>
      <Pressable onPress={() => navigation.navigate("Family")}>
        <View style={styles.cardContent}>
          <AppText style={{ fontWeight: 'bold' }}>MY NET WORTH</AppText>
        </View>
        <View style={styles.cardContent}>
          <AppText style={{ fontWeight: 'bold', fontSize: 27 }}>₹ 2,65,000</AppText>
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
          backgroundGradientFrom: theme.lightPrimary.toString(),
          backgroundGradientTo: theme.lightPrimary.toString(),
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
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
                <AppText style={styles.itemAmount}>{category.item.amount}</AppText>
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
  },
  itemAmount: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    color: theme.tomato
  },
});


export default Explore;