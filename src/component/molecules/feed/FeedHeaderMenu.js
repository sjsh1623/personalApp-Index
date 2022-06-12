import React, {useRef} from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomSheet from "react-native-gesture-bottom-sheet";

const FeedHeaderMenu = () => {
    const BottomSheetRef = useRef();
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <BottomSheet hasDraggableIcon ref={BottomSheetRef} height={300}>

            </BottomSheet>
            <Icon name="ellipsis-vertical" size={21} onPress={() => {
                BottomSheetRef.current.show()
            }} color="black" style={{
                alignItems: 'flex-end',
            }}/>
        </View>
    )
}

export default FeedHeaderMenu;
