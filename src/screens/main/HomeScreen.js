import React, {useContext, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomTemplate from "@templates/BottomTemplate";
import {Context} from "@context";

const HomeScreen = (props) => {
    const [openOption, setOpenOption] = useState(false);
    const {state: {
        dimmedScreen: {display},
    }, dispatch} = useContext(Context);
    const openBottomSheet = (isOpen) => {
        setOpenOption(isOpen)
        dispatch({dimmedScreen: true});
        console.log(display)
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={style.container}>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
                <FeedTemplate optionSheet={{openBottomSheet}}/>
            </ScrollView>
            <BottomTemplate control={{openOption, openBottomSheet}}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})


export default HomeScreen;
