import {View, Text, Image, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
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
        height: 240,
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 5,
        borderRadius: 8,
        borderColor: 'white',
        padding: 10
    }
})

export default FeedTemplate;
