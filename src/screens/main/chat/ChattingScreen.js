import {SafeAreaView, ScrollView} from "react-native";
import ChatListTemplate from "@templates/ChatListTemplate";
import SendTemplate from "@templates/Chatting/SendTemplate";

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
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChattingScreen;
