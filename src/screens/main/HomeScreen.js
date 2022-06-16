import React, {useCallback, useMemo, useRef} from "react";
import {SafeAreaView, View, ScrollView, StyleSheet, Text} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

const HomeScreen = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = ["30%, 90%"]

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
                <BottomSheet
                    ref = {bottomSheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}>
                    <BottomSheetView>
                        <Text>test</Text>
                    </BottomSheetView>
                </BottomSheet>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})


export default HomeScreen;
