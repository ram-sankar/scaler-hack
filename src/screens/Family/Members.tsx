import React, {useContext, useState} from "react";
import { FlatList, StyleSheet, View, Pressable } from "react-native";

import AppScreen from "../../components/AppScreen";
import { mocks } from "../../constants";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import AppButton from './../../components/AppButton';
import AppModal from './../../components/AppModal';
import TextInput from './../../components/TextInput';
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";


function Family() {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [input, setInput] = useState();

  const FamilyList = () => (
    <FlatList
      data={mocks.family}
      renderItem={(member) => (
        <View style={[styles.card, {backgroundColor: member.item.relationship === 'You' ? theme.lightOrange : theme.lightBlue}]}>
          <View style={styles.cardContent}>
            <View style={[styles.cardIconContainer, {backgroundColor: member.item.relationship === 'You' ? theme.lightOrange2 : theme.lightBlue2}]}>
              <AppText style={[styles.cardIcon]}>{member.item.name.charAt(0)}</AppText>
            </View>
            <View style={styles.itemNameContainer}>
              <AppText style={styles.itemName}>{member.item.name}</AppText>
              <AppText style={styles.relationship}>{member.item.relationship}</AppText>
            </View>
            <View style={styles.amountContainer}>
              <AppText style={styles.amount}>&#8377;{member.item.amount}</AppText>
              <AppText style={styles.amountNote}>Bill Amount Paid</AppText>
            </View>
          </View>
        </View>
      )}
    />
  )

  const AddMember = () => (
    <View style={styles.addMemberContainer}>
      <AppButton 
        title="+ Add Member"
        onPress={() => setIsModalVisible(true)}
        style={styles.addMember}
      />
    </View>
  )

  const RenderModel = () => {
    return(
    <AppModal isModalVisible={isModalVisible} onRequestClose height={200} width={200} >
      <AppText style={styles.modalText}>Phone Number</AppText>
      <TextInput
        onChangeText={(text: any) => setInput(text)}
        value={input}
      />
      <Pressable
        style={[styles.button]}
        onPress={() => setIsModalVisible(false)}
      >
        <AppText style={styles.textStyle}>Send Request</AppText>
      </Pressable>
    </AppModal>
  )}

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>My Family</AppText>
        {/* <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/> */}
      </View>
      
      <View style={styles.line}></View>

      <FamilyList/>
      {/* <AddMember/> */}

      <RenderModel/>
      
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
  relationship: {
    color: theme.gray,
    fontSize: 15
  },
  cardIconContainer: {
    // backgroundColor: theme.lightBlue2,
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
  addMemberContainer: {
    alignItems: 'flex-end'

  },
  addMember: {
    width: 150,
    height: 50,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    width: 200
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    backgroundColor: theme.primary,
    elevation: 2
  },
  textStyle: {
    color: "white",
  },
});

export default Family;