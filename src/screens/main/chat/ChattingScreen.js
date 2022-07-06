import {SafeAreaView, ScrollView, View, TextInput} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SendTemplate from "@templates/Chatting/SendTemplate";
import ReceiveTemplate from "@templates/Chatting/ReceiveTemplate";
import React, {useState} from "react";

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
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop : 5,
                paddingBottom : 5
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '95%',
                    borderColor : "#E0E0E0",
                    padding: 7,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 25,
                    borderWidth: 1,
                }}>
                    <TextInput
                        style={{
                            flex: 1,
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
                    <Icon name="paper-plane-outline" size={27} color="black" style={{color: '#7BD9F6'}}/>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default ChattingScreen;
