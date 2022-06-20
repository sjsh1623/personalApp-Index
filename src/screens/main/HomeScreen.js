import React, {useContext, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomTemplate from "@templates/BottomTemplate";
import {Context} from "@context";
import {DIM_SCREEN, CLEAR_SCREEN} from "@context/action";

const HomeScreen = (props) => {
    const [openOption, setOpenOption] = useState(false);
    const {dispatch} = useContext(Context);

    const openBottomSheet = (isOpen) => {
        setOpenOption(isOpen)
        dispatch({
            type: DIM_SCREEN,
            visible: isOpen,
        });

        if(!isOpen) {
            setTimeout(()=> {
                dispatch({
                    type: CLEAR_SCREEN,
                    display : 'none'
                })
            }, 200)
        }
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
