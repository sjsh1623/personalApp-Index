import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '@screens/loading/LoadingScreen.js';
import LoginScreen from "@screens/login/LoginScreen.js";
import MainScreen from "@screens/main/MainScreen.js";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Loading" component={LoadingScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Main" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerShown: false,
}

