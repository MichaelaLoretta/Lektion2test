
import React from "react";

import {  Text, View, StyleSheet} from "react-native";


const MyButton = (props) => {
    return(
        <View style={styles.btn}>
            <Text style={styles.btnText}>{props.btnText}</Text>

        </View>
        

    );


};
const styles = StyleSheet.create({
    btn: {
      width: 30,
      height: 30,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center",
      margin: 1,
      borderRadius: 10,
    
     
    },
    boldText: {
      fontSize: "16px",
      fontWeight: 300,
    }
  });

export default MyButton;

