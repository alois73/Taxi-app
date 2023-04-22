import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const nav = useNavigation();
    return(
        <SafeAreaView style={tw`bg-yellow-300 flex-1`}>
            <TouchableOpacity 
                onPress={() => nav.navigate("HomeScreen")} 
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            >
                <Icon name="chevron-left" type="fontawesome"/>
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl bg-amber-300`}>HELLO</Text>
            <View style={tw`border-t border-amber-400 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            )
                                navigation.navigate('RideOptionsCard')
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                </View>
                
                <NavFavourites />
            </View>

            <View style={tw`pl-40 py-5 border-t border-amber-400`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("RideOptionsCard")}
                    style={tw`flex flex-row justify-between bg-amber-300 w-24 px-4 py-3 rounded-full`}
                    >
                    
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-black text-center`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "White",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});