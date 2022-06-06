import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {bottomIcons} from "@res/bottomIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigation from "@navigations/main/HomeNavigation.js";
import ChatListScreen from "@screens/main/ChatListScreen.js";
import SearchScreen from "@screens/main/SearchScreen.js";
import {defaultTabOptions} from "@res/navigationOptions.js";


const MainTabNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            options = {mainHeaderOption}
            screenOptions={({route}) => (screenOption(route))}>
            <Tab.Screen name="Home" component={HomeNavigation}/>
            <Tab.Screen name="Chat" component={ChatListScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
        </Tab.Navigator>
    );
}

const screenOption = (route) => {
    const tabBarOption = {
        tabBarIcon: ({focused}) => {
            const icon = bottomIcons[route.name];
            const focusIcon = focused ? '': '-outline'
            return <Icon name= {icon + focusIcon} size={21} color="black"/>;
        },
    }

    return {...defaultTabOptions, ...tabBarOption, ...mainHeaderOption}
}

const mainHeaderOption = {
    headerBackVisible: false,
    title: '',
    headerLeft: ({onPress}) => (
        <TouchableOpacity onPress={onPress} style = {{marginLeft: 20}}>
            <Text>Logo Here</Text>
        </TouchableOpacity>
    ),
    headerRight: ({onPress}) => (
        <TouchableOpacity onPress={onPress} style = {{marginRight: 20}}>
            <Icon name= 'person-circle-outline' size={30} color="black"/>
        </TouchableOpacity>
    ),
    headerMode: 'none'
}

export default MainTabNavigation;
