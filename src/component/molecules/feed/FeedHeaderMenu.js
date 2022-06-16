import React, {useRef, useMemo, useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import Test from '@templates/BottomTemplate.js'

const FeedHeaderMenu = () => {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentPress = () => bottomSheetModalRef.current.present()
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Icon name="ellipsis-vertical" size={21} onPress={() => {
                Test(bottomSheetModalRef)
            }} color="black" style={{
                alignItems: 'flex-end',
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default FeedHeaderMenu;
