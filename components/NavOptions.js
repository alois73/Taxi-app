import { useNavigation } from '@react-navigation/native';
import { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'twrnc'
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },

    {
      id: "456",
      title: "View Map",
      image: "https://cdn-icons-png.flaticon.com/512/5088/5088135.png",
      screen: "FullMapScreen",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-5 pl-2 pb-8 bg-amber-300 ml-4.5 mt-20 w-40`}
            //disabled={!origin}
            >
                <View /**  style={tw`${!origin && "opacity-20"}`}*/ >
                    <Image
                    style={{paddingLeft: 4 ,width: 150, height:120, resizeMode: "contain"}}
                    source={{ uri:item.image }}/>
                    <Text style={tw`mt-2 pl-4 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`p-2 bg-orange-400 rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
       )}
      />

    );
  };

export default NavOptions