import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '@screens/loading/LoadingScreen.js';
import LoginNavigation from "@navigations/login/LoginNavigation.js";
import HomeNavigation from "@navigations/main/HomeNavigation.js";
import OnBoardingNavigation from "@navigations/onboarding/OnBoardingNavigation";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Loading" component={LoadingScreen}/>
                <Stack.Screen name="OnBoardingNavigation" component={OnBoardingNavigation}/>
                <Stack.Screen name="LoginNavigation" component={LoginNavigation}/>
                <Stack.Screen name="HomeNavigation" component={HomeNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerShown: false,
}

