import {SafeAreaView, ScrollView, View, TextInput} from "react-native";
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
            <ScrollView style={{
                height : "80%",
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
            borderRadius : 45,
            borderWidth  : 1,
            padding: 5,
            paddingLeft : 20,
            width : '95%',
            marginLeft : 10,
        }}
        scrollEnabled = {true}
        multiline={true}
        autoCapitalize={'none'}
        autoComplete = "off"
        placeholder="useless placeholder"
    />
</View>
        </SafeAreaView>
    )
}

export default ChattingScreen;
