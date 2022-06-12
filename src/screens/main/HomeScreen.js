import React, {useRef} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomSheet from "react-native-gesture-bottom-sheet";

const HomeScreen = () => {
    const bottomSheet = useRef();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={style.container}>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})


export default HomeScreen;
