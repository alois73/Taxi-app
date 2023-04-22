import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-yellow-300 h-full`}>
            <View style={tw`p-5 pt-5`}>

                <Image
                style={{ width: 120, height: 120, resizeMode: "contain"}}
                source={{ uri: "https://pngimg.com/uploads/taxi_logos/taxi_logos_PNG1.png" }}
                />                
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    /> 

                <NavOptions />

                <NavFavourites/>
            </View>



        </SafeAreaView>
    )
}

export default HomeScreen

