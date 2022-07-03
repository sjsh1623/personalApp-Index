import {Image, ScrollView, Text, View, TouchableOpacity} from "react-native";
import UserImage from "@atoms/UserImage";
import ChatListSummary from "@organisms/chat/ChatListSummary";

const SendTemplate = (props) => {
    return (
        <View style ={{
            flexDirection: 'row',
            alignItems: "center",
            marginBottom: 10,
            marginTop : 10,
        }}>
            <View style={{flexDirection: 'row'}}>
                <UserImage
                    radius={38}
                    path={require('@assets/profile-andrew.jpeg')}/>
            </View>
            <View style={{
                marginLeft : 8,
                borderWidth : 1,
                borderColor : "grey",
                fontsize : 15,
                padding: 6,
                borderRadius : 45,
                alignContent  : "center"
            }}>
                <Text>여기는 테스트입니다.</Text>
            </View>
        </View>
    )
}

export default SendTemplate;
