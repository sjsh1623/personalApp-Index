import {SafeAreaView, ScrollView, View, TextInput} from "react-native";
import ChatListTemplate from "@templates/ChatListTemplate";
import SendTemplate from "@templates/Chatting/SendTemplate";
import ReceiveTemplate from "@templates/Chatting/ReceiveTemplate";
import {useState} from "react";

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
            <View>
                <TextInput
                    style={{
                        borderRadius: 25,
                        borderWidth: 1,
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '95%',
                        marginLeft: 10,
                        flex: 0,
                        height: ChatInputHeight,
                        fontSize: 15
                    }}
                    onContentSizeChange={(event) => {
                        const limitHeight = 150;
                        const contentHeight = event.nativeEvent.contentSize.height;
                        const isExceed = limitHeight < contentHeight;
                        setChatInputHeight(isExceed ? limitHeight : event.nativeEvent.contentSize.height)
                    }}
                    numberOfLines={5}
                    multiline={true}
                    autoCapitalize={'none'}
                    autoComplete="off"
                    placeholder="Message..."
                />
            </View>
        </SafeAreaView>
    )
}

export default ChattingScreen;
