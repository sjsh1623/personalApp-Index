import {StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";

const MessageInput = () => {
    const [ChatInputHeight, setChatInputHeight] = useState(70);

    const setHeight = (event) => {
        const limitHeight = 150;
        const contentHeight = event.nativeEvent.contentSize.height;
        const isExceed = limitHeight < contentHeight;
        setChatInputHeight(isExceed ? limitHeight : event.nativeEvent.contentSize.height)
    }
    return (
        <View style={style.mainContainer}>
            <View style={style.messageContainer}>
                <TextInput height={ChatInputHeight}
                           style={[style.textInput, {height: ChatInputHeight}]}
                           onContentSizeChange={(event) => {
                               setHeight(event)
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
    )
}

const style = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderColor: "#E0E0E0",
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        fontSize: 15
    }

})

export default MessageInput;
