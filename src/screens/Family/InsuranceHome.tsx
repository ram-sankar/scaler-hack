import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppScreen from "../../components/AppScreen";
import { mocks } from "../../constants";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import AppIcons from "../../components/AppIcons";
import AppButton from "../../components/AppButton";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";


function InsuranceHome({navigation}: any) {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);
  
  const BillList = () => (
    <FlatList
      data={mocks.insuranceDetails}
      renderItem={(insurance) => (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.itemNameContainer}>
              <AppText style={styles.itemName}>{insurance.item.name}</AppText>
              <AppText style={[styles.daysLeft]}>{insurance.item.date}</AppText>
              <AppText style={[styles.paidBy]}>Paid By: 
                <AppText style={[styles.paidByName]}> {insurance.item.paidBy}
                </AppText>
              </AppText>
            </View>

            <View style={styles.amountContainer}>
              <AppText style={styles.amount}>&#8377;{insurance.item.amount}</AppText>
              <AppText style={styles.amountNote}>Bill Amount</AppText>
            </View>
            
            <View style={styles.downloadIcon}>
              <AppIcons Icon='Feather' color={theme.darkGrey} name="download" size={24} />
            </View>

          </View>
        </View>
      )}
    />
  )

  const NewInsurance = () => (
    <View style={styles.addMemberContainer}>
      <AppButton 
        title="+ New Insurance"
        onPress={() => navigation.navigate('Insurance')}
        style={styles.addMember}
      />
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>Insurance Details</AppText>
      </View>
      
      <View style={styles.line}></View>

      <NewInsurance/>
      <BillList/>
      
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
    backgroundColor: theme.lightViolet,
    height: 100,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 15,
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
    color: theme.gray,
    fontWeight: '700',
    fontSize: 13,
    paddingVertical: 3
  },
  paidBy: {
    color: theme.darkGrey,
    fontWeight: '700',
    fontSize: 14
  },
  paidByName: {
    color: theme.darkGrey,
    fontWeight: '700',
    fontSize: 14
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
    justifyContent:'center',
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
  downloadIcon: {
    justifyContent: 'center',
    marginRight: 15
  },
  addMember: {
    height: 35,
    width: 170,
  },
  addMemberContainer: {
    alignItems: 'center'
  }
});

export default InsuranceHome;