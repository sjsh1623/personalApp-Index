import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {defaultScreenOptions} from "@res/navigationOptions.js";
import ChatHomeScreen from "@screens/main/chat/ChatHomeScreen";
import ChattingScreen from "@screens/main/chat/ChattingScreen";

const ChatNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen name="ChatHome" component={ChatHomeScreen} />
            <Stack.Screen name="Chatting" component={ChattingScreen} />
        </Stack.Navigator>
    );
}

export default ChatNavigation;
