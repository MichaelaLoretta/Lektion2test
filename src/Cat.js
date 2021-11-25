import { StatusBar } from "expo-status-bar";

import React from "react";

import { Text, View} from "react-native";

import { useState } from "react"; //importerat möjligheten att ändra på variabler




const Cat = (props) => {
    return(
        <View>
            <Text> Name of Cat: {props.name} says: Mjau Mjau</Text>

        </View>
        

    );
};

export default Cat;