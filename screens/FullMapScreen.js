import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from 'twrnc';
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";

const FullMapScreen = () => {
    const Stack = createStackNavigator();

    return(
        <View>
            <View style={tw`h-1/1`}>
                <Map/>
            </View>


        </View>
    )
}

export default FullMapScreen
