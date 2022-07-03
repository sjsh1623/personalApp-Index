import {Image, ScrollView, Text, View, TouchableOpacity} from "react-native";
import UserImage from "@atoms/UserImage";
import ChatListSummary from "@organisms/chat/ChatListSummary";

const SendTemplate = (props) => {
    return (
        <View style ={{
            flexDirection: 'row-reverse',
            alignItems: "center",
            marginBottom: 3,
            marginTop : 3,
        }}>
            <View style={{
                marginRight : 8,
                borderColor : "grey",
                fontsize : 15,
                padding: 7,
                paddingLeft: 15,
                paddingRight : 15,
                borderRadius : 45,
                alignContent  : "center",
                backgroundColor : "#EEEEEE"
            }}>
                <Text>여기는 테스트입니다.</Text>
            </View>
        </View>
    )
}

export default SendTemplate;
