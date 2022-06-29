import {Text, View} from "react-native";

const ChatListSummary = () => {
    return (
        <View style={{marginLeft: 20}}>
            <Text style={{
                fontSize: 15,
            }}>임석현</Text>
            <View style={{flexDirection: 'row', paddingTop: 3}}>
                <Text style={{
                    fontSize: 14,
                }}>20 new messages</Text>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 2,
                    marginRight: 2
                }}>
                    ·
                </Text>
                <Text style={{
                    fontSize: 14,
                }}>1d</Text>
            </View>
        </View>
    )
}

export default ChatListSummary;
