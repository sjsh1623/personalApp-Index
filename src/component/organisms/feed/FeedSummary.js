import {StyleSheet, Text, View} from "react-native";
import React from "react";

import FeedSummaryCategory from "@molecules/feed/FeedSummaryCategory.js";
import FeedSummaryContext from "@molecules/feed/FeedSummaryContext.js";

const FeedSummary = () => {
    return (
        <View style={style.container}>
            <FeedSummaryCategory/>
            <FeedSummaryContext/>
        </View>
    )
}

const style = StyleSheet.create({
    'container' : {
        paddingTop: 10,
        width: '100%',
        height: '65%',
        backgroundColor: 'white',
    }
})
export default FeedSummary;
