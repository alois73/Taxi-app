import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from "react-native-elements";
import tw from "twrnc"

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Rruga 5 maji, Tirana, Albania",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Sheshi Wilson, Tirana, Albania",
    },
];



const NavFavourites = () => {
    return <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-amber-400 h-1`, { height: 1}]} />
        )}
        renderItem={({ item: {location, destination, icon} }) => (
            <TouchableOpacity style={tw`flex-row p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-amber-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-black`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />;
}

export default NavFavourites

