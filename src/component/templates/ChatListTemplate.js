import {Image, ScrollView, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import UserImage from "@atoms/UserImage";
import ChatListSummary from "@organisms/chat/ChatListSummary";
import ChatListStatus from "@atoms/ChatListStatus";

const ChatListTemplate = () => {
    return (
        <View style={{
            justifyContent: "space-between",
            flexDirection: 'row',
            alignItems: "center",
        }}>
            <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                <UserImage
                    radius={46}
                    path={require('@assets/profile-andrew.jpeg')}/>
                <ChatListSummary />
            </View>
         <ChatListStatus />
        </View>
    )
}

export default ChatListTemplate;
