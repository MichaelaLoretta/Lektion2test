
import React from "react";

import {  Text, View, StyleSheet} from "react-native";


const MyButton = (props) => {
    return(
        <View style={styles.btn}>
            <Text style={styles.boldText}>{props.btnText}</Text>

        </View>
        

    );


};
const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 40,
      backgroundColor: '#eee',
      justifyContent: "center",
      textAlign: "center",
      margin: 20,
      borderRadius: 25,
      borderColor: "#ee5",
      borderWidth: 2,
     
    },
    boldText: {
      fontSize: "19px",
      fontWeight: "bold",
    }
  });

export default MyButton;

