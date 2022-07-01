import {Image, ScrollView, Text, View, TouchableOpacity} from "react-native";
import UserImage from "@atoms/UserImage";
import ChatListSummary from "@organisms/chat/ChatListSummary";
import ChatListStatus from "@atoms/ChatListStatus";
import {useNavigation} from "@react-navigation/core";

const ChatListTemplate = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{
            justifyContent: "space-between",
            flexDirection: 'row',
            alignItems: "center",
        }} onPress = {() => {
           navigation.push('Chatting')
        }}>
            <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                <UserImage
                    radius={46}
                    path={require('@assets/profile-andrew.jpeg')}/>
                <ChatListSummary />
            </View>
         <ChatListStatus />
        </TouchableOpacity>
    )
}

export default ChatListTemplate;
