import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {defaultScreenOptions} from "@res/navigationOptions.js";
import HomeScreen from "@screens/main/home/HomeScreen";

const HomeNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );

}

export default HomeNavigation;
