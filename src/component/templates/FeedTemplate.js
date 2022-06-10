import {View, StyleSheet} from "react-native";
import FeedHeader from '@organisms/feed/FeedHeader.js';
import FeedSummary from '@organisms/feed/FeedSummary.js';
import FeedFooter from '@organisms/feed/FeedFooter.js'
import React from "react";

const FeedTemplate = () => {
    return (
        <View style= {style.container}>
            <FeedHeader/>
            <FeedSummary/>
            <FeedFooter/>
        </View>
    )
}

const style = StyleSheet.create({
    'container' : {
        width: '90%',
        height: 250,
        borderWidth: 5,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10
    }
})

export default FeedTemplate;
