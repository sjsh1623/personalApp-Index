import {Text, View} from "react-native";
import UserImage from "@atoms/UserImage";

const ReceiveTemplate = () => {
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
