import React, {useCallback, useMemo, useRef} from "react";
import {SafeAreaView, Button, ScrollView, StyleSheet, Text, View} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTemplate from "@templates/BottomTemplate";

const HomeScreen = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = ["35%, 50%"]

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
            <BottomTemplate/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})


export default HomeScreen;
