import React, {useRef, useMemo, useCallback} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import ChatListTemplate from "@templates/ChatListTemplate"
import Icon from 'react-native-vector-icons/Ionicons';

const ChatListScreen = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <ScrollView>
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
                <ChatListTemplate />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})

export default ChatListScreen;
