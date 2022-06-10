import {StyleSheet, Text, View} from "react-native";
import React from "react";

const FeedSummaryContext = () => {
    return (
        <View style={style.container}>
            <Text style={style.title}>타이틀</Text>
            <Text style={style.context}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard ..</Text>
        </View>
    )
}

const style = StyleSheet.create({
    'container' : {
        paddingTop: 10,
    },
    'title' : {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    'context' : {

    }
})

export default FeedSummaryContext;
