import {SafeAreaView, ScrollView} from "react-native";
import ChatListTemplate from "@templates/ChatListTemplate";

const ChattingScreen = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChattingScreen;
