import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '@screens/loading/LoadingScreen.js';
import LoginNavigation from "@navigations/login/LoginNavigation.js";
import MainTabNavigation from "@navigations/main/MainTabNavigation.js";
import OnBoardingNavigation from "@navigations/onboarding/OnBoardingNavigation";
import {defaultScreenOptions} from "@res/navigationOptions.js";
import BottomSheet from "react-native-gesture-bottom-sheet";
import {View} from "react-native-web";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={defaultScreenOptions}>
                <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                <Stack.Screen name="OnBoardingNavigation" component={OnBoardingNavigation}/>
                <Stack.Screen name="LoginNavigation" component={LoginNavigation}/>
                <Stack.Screen name="MainNavigation" component={MainTabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
