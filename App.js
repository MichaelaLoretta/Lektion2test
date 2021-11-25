import { StatusBar } from "expo-status-bar";

import React, { cloneElement } from "react";

import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";

import { useState } from "react"; //importerat möjligheten att ändra på variabler

import Cat from "./src/Cat"; //importerar min custom component Cat
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
        <View><Text style={styles.logoText}>SmartHome</Text></View>
      </View>

      <Text style={styles.boldText}>Rooms</Text>
      
      <View style={styles.menu}>

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


      <Device deviceName="Living Room Lamp"></Device>
      <Device deviceName="Heater"></Device>
      <Device deviceName="TV"></Device>


      <Text>Total devices on </Text>



      <Text style={{ color: textColor }}>This text is {textColor} color</Text>
      <TextInput
        placeholder="Enter A Color"
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
      />


      <View style={{ margin: 15 }}>
        <Button
          style={styles.buttons}
          title="Set Text Color"
          onPress={() => setTextColor(inputValue)}
        />
      </View>

      <Text style={{ fontSize: textSize }}>This text is {textSize} </Text>
      <TextInput
        placeholder="Enter A font size in px"
        value={inputValue2}
        onChangeText={(value) => setInputValue2(value)}
      />

      <View style={{ margin: 15 }}>
        <Button
          style={styles.buttons}
          title="Set Font Size"
          onPress={() => setTextSize(inputValue2)}
        />
      </View>

      <Cat name="korv"></Cat>

      <View style={styles.menuView}>
        <MyButton btnText="Home"></MyButton>
        <MyButton btnText="About"></MyButton>
        <MyButton btnText="Contact"></MyButton>
        <MyButton btnText="Blog"></MyButton>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  menuView: {
    flexDirection: "row",
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
    marginTop: 30,

  },

  header: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignContent: "space-between",

  },

  roomBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "pink",
    margin: 15,
    justifyContent: "center",
    alignContent: "center",

  },

  roomImg: {
    width: 70,
    height: 70,
    


  },

  menu: {
    alignContent: "space-between",
    flexDirection: "row",

  },


  boldText: {
    fontWeight: "bold",
    fontSize: "2rem",
    marginLeft: 15,
    marginBottom: 0,
  },


});
