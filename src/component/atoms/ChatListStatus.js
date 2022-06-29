import {View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ChatListStatus = () => {
    return(
        <View style={{
            alignItems: 'flex-end',
            marginRight: 5
        }}>
            <Icon name='ellipse' size={8} color="green"/>
        </View>
    )
}

export default ChatListStatus;
