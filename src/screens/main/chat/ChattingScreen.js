import {SafeAreaView, ScrollView, View, TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SendTemplate from "@templates/Chatting/SendTemplate";
import ReceiveTemplate from "@templates/Chatting/ReceiveTemplate";
import React, {useState} from "react";
import MessageInput from "@organisms/chat/MessageInput";

const ChattingScreen = () => {
    const [ChatInputHeight, setChatInputHeight] = useState(70);
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingLeft: 10,
            paddingRight: 10
        }}>
            <ScrollView style={{
                height: "80%",
                width: "100%",
            }}>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
                <SendTemplate/>
                <ReceiveTemplate/>
            </ScrollView>
            <MessageInput/>
        </SafeAreaView>
    )
}

export default ChattingScreen;
