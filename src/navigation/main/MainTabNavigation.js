import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeNavigation from "@navigations/main/HomeNavigation.js";
import ChatListScreen from "@screens/main/ChatListScreen.js";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {defaultScreenOptions, defaultTabOptions} from "@res/navigationOptions.js";
import React from "react";
import {Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {tabIcon} from "@res/bottomIcons";
import {bottomIcons} from "../../res/bottomIcons";


const MainTabNavigation = ({navigation, route}) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({route}) => (screenOption(route))}>
            <Tab.Screen name="Home" component={HomeNavigation}/>
            <Tab.Screen name="Chat" component={ChatListScreen}/>
        </Tab.Navigator>
    );
}

const screenOption = (route) => {
    const defaultOptions = {...defaultScreenOptions, ...defaultTabOptions};
    const tabBarOption = {
        tabBarIcon: ({focused}) => {
            const icon = bottomIcons[route.name];
            const focusIcon = focused ? '': '-outline'
            return <Icon name= {icon + focusIcon} size={21} color="black"/>;
        },
    }

    return {...defaultOptions, ...tabBarOption}
}

export default MainTabNavigation;
