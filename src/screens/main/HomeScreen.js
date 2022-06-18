import React, {useCallback, useMemo, useRef, useState} from "react";
import {SafeAreaView, Button, ScrollView, StyleSheet, Text, View} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTemplate from "@templates/BottomTemplate";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BlockScreen from "@screens/BlockScreen";

const HomeScreen = (props) => {
    const [openOption, setOpenOption] = useState(false);
    const openBottomSheet = (isOpen) => {
        setOpenOption(isOpen)
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
