import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '@screens/loading/LoadingScreen.js';
import LoginNavigation from "@navigations/LoginNavigation.js";
import MainNavigation from "@navigations/MainNavigation.js";
import OnBoardingNavigation from "@navigations/OnBoardingNavigation";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Loading" component={LoadingScreen}/>
                <Stack.Screen name="OnBoardingNavigation" component={OnBoardingNavigation}/>
                <Stack.Screen name="LoginNavigation" component={LoginNavigation}/>
                <Stack.Screen name="MainNavigation" component={MainNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerShown: false,
}

