import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";


function Explore() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <AppScreen style={styles.container}>
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});
export default Explore;