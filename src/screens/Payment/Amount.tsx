import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";


function Amount() {
  const { theme }: any = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <AppScreen style={styles.container}>
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
});
export default Amount;