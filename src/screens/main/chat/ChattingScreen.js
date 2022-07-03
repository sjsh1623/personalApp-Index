import {SafeAreaView, ScrollView} from "react-native";
import ChatListTemplate from "@templates/ChatListTemplate";
import SendTemplate from "@templates/Chatting/SendTemplate";
import ReceiveTemplate from "@templates/Chatting/ReceiveTemplate";

const ChattingScreen = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingLeft: 10,
            paddingRight: 10
        }}>
            <ScrollView>
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
        </SafeAreaView>
    )
}

export default ChattingScreen;
