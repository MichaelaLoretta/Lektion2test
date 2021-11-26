
import React from "react";

import {  Text, View, StyleSheet} from "react-native";
import MyButton from "./MyButton";


const Device = (props) => {
    return(
        <View style={styles.deviceBox}>

          <View style={styles.indikator}></View>

            <Text style={styles.boldText}>  {props.deviceName} </Text>

            <View style={styles.buttons}>
            <MyButton btnText="ON"></MyButton>
            <MyButton btnText="OFF"></MyButton>
            </View>



        </View>
        

    );


};
const styles = StyleSheet.create({
    deviceBox: {
      
      height: 100,
      backgroundColor: "pink",
      flexDirection: "row",
      alignItems: "center",
      margin: 15,
    
     
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

    buttons: {
      flexDirection: "column",
      
      
    }
  });

export default Device;
