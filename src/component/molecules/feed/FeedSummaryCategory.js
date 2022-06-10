import {Text, View} from "react-native";
import React from "react";

const FeedSummaryCategory = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{
                backgroundColor: 'lightgrey',
                borderColor: 'lightgrey',
                alignSelf: 'flex-start',
                paddingRight: 6,
                paddingLeft: 6,
                borderRadius: 10,
                borderWidth: 3,
            }}>
                <Text>React Native</Text>
            </View>

            <View style={{
                backgroundColor: 'lightgrey',
                borderColor: 'lightgrey',
                alignSelf: 'flex-start',
                paddingRight: 6,
                paddingLeft: 6,
                marginLeft: 8,
                borderRadius: 10,
                borderWidth: 3,
            }}>
                <Text>MBTI</Text>
            </View>
        </View>
    )
}

export default FeedSummaryCategory;
