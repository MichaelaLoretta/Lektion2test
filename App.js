import { StatusBar } from "expo-status-bar";

import React, { cloneElement } from "react";

import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";

import { useState } from "react"; //importerat möjligheten att ändra på variabler


import MyButton from "./src/MyButton";
import Device from "./src/Device";

export default function App() {
  //Variabler här

  const [inputValue, setInputValue] = useState("");

  const [textColor, setTextColor] = useState("blue");

  const [inputValue2, setInputValue2] = useState("");

  const [textSize, setTextSize] = useState("40px");

  return (
    //nedan syns i VP


    <View style={styles.container}>
      

      <View style={styles.header}>
        <Image style={styles.logo} source={require("./assets/house.png")}></Image>
        <Text style={styles.logoText}>SmartHome</Text>
      </View>

      <Text style={styles.boldText}>Rooms</Text>
      
      <View style={styles.header}>

      <View style={styles.roomBox}>
      <Image style={styles.roomImg} source={require("./assets/livingroom.png")}></Image>
      <Text>Livingroom</Text>
      </View>

      <View style={styles.roomBox}><Image style={styles.roomImg}  source={require("./assets/bed.png")}></Image>
      <Text>Bedroom</Text>
      </View> 

      <View style={styles.roomBox}><Image style={styles.roomImg} source={require("./assets/kitchen.png")}></Image>
      <Text>Kitchen</Text>
      </View>


      
      </View>


      <Text style={styles.boldText}>Devices</Text>

      <View style={styles.devices}>
      <Device deviceName="Living Room Lamp"></Device>
      <Device deviceName="Heater"></Device>
      <Device deviceName="TV"></Device>
      </View>

      <Text>Total devices on </Text>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    

  },
  logo: {
    width: 50,
    height: 50,
    margin: 15,
    
    
  },

  logoText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "pink",

  },


  roomBox: {
    width: 110,
    height: 110,
    borderRadius: 10,
    backgroundColor: "pink",
    margin: 15,
    alignItems: "center",
    justifyContent: "space-around",


  },

  roomImg: {
    width: 70,
    height: 70,
    


  },

  devices: {
    flexDirection:"column",
    alignContent: "space-between",
  },

  boldText: {
    fontWeight: "bold",
    fontSize: "2rem",
    marginLeft: 15,
    marginBottom: 0,
  },


});
