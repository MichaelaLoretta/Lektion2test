
import React from "react";

import {  Text, View, StyleSheet} from "react-native";


const Device = (props) => {
    return(
        <View style={styles.deviceBox}>
            <Text style={styles.boldText}> Indikator {props.deviceName} On - Off </Text>

        </View>
        

    );


};
const styles = StyleSheet.create({
    deviceBox: {
        width: 350,
        height: 100,
      justifyContent: "center",
      textAlign: "center",
      margin: 15,
      borderRadius: 10,
      borderColor: "#ee5",
      borderWidth: 2,
      backgroundColor: "pink",
      flexDirection: "column",
     
    },
    boldText: {
      fontSize: "19px",
      fontWeight: 300,
    }
  });

export default Device;
