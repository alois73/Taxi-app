import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, Linking } from "react-native";
import tw from 'twrnc';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import "intl";
import "intl/locale-data/jsonp/en";

const data = [
    {
        id: '1',
        title: "Taxi 1",
        multiplier: 1,
        phoneNum: "0675789372",
        image: "https://links.papareact.com/3pn",
    },
    {
        id: '2',
        title: "Taxi 2",
        multiplier: 1,
        phoneNum: "0675789372",
        image: "https://links.papareact.com/5w8",
    },
    {
        id: '3',
        title: "Taxi 3",
        multiplier: 1,
        phoneNum: "0675789372",
        image: "https://links.papareact.com/7pf",
    },
    {
        id: '4',
        title: "Taxi 4",
        multiplier: 1,
        phoneNum: "0675789372",
        image: "https://links.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigaton = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return(
        <SafeAreaView style={tw`bg-yellow-300 flex-1`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigaton.navigate("NavigateCard")} 
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center bg-amber-300 py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
            </View>

            <FlatList 
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={({item: { id, title, multiplier, image, phoneNum}, item }) => (
                    <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-amber-300"}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text style={tw`text-l font-semibold`}>{phoneNum}</Text>
                            <Text>{travelTimeInformation?.duration.text}Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "ALL",
                            }).format(
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <TouchableOpacity onPress={() => {Linking.openURL(`tel:${selected?.phoneNum}`);}} disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-amber-300'}`}>
                <Text style={tw`text-center text-yellow-300 text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard

const styles = StyleSheet.create({})