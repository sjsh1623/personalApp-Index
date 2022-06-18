import React, {useRef, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '@screens/loading/LoadingScreen.js';
import LoginNavigation from "@navigations/login/LoginNavigation.js";
import MainTabNavigation from "@navigations/main/MainTabNavigation.js";
import OnBoardingNavigation from "@navigations/onboarding/OnBoardingNavigation";
import {defaultScreenOptions} from "@res/navigationOptions.js";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomTemplate from "@templates/BottomTemplate";
import {View, Text, SafeAreaView} from "react-native";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        // GestureHandlerRootView is for bottom template
        // https://docs.swmansion.com/react-native-gesture-handler/docs/installation/
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={defaultScreenOptions}>
                    <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                    <Stack.Screen name="OnBoardingNavigation" component={OnBoardingNavigation}/>
                    <Stack.Screen name="LoginNavigation" component={LoginNavigation}/>
                    <Stack.Screen name="MainNavigation" component={MainTabNavigation}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
