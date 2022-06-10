import {Image, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FeedHeaderMenu from '@molecules/feed/FeedHeaderMenu.js';
import FeedHeaderProfile from '@molecules/feed/FeedHeaderProfile.js';
import React from "react";

const FeedHeader = () => {
    return (
        <View style={style.container}>
            <FeedHeaderProfile/>
            <FeedHeaderMenu/>
        </View>
    )
}

const style = StyleSheet.create({
    'container' : {
        height: '20%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default FeedHeader;
