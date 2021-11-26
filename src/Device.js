import React from "react";

import { Text, View, StyleSheet } from "react-native";
import MyButton from "./MyButton";

const Device = (props) => {
  return (
    <View style={styles.deviceBox}>
      <View style={styles.test}>
        <View style={styles.indikator}></View>
        <Text style={styles.boldText}> {props.deviceName} </Text>
      </View>

      <View>
        <MyButton btnText="ON"></MyButton>
        <MyButton btnText="OFF"></MyButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  deviceBox: {
    backgroundColor: "pink",
    width: 400,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 15,
    padding: 10,
  },

  boldText: {
    fontSize: "19px",
    fontWeight: 600,
  },

  indikator: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
  },

  test: {
    width: "90%",
    height: "auto",
    backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
  },

  width: {
    width: "100%",
    height: "auto",
    backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});

export default Device;
