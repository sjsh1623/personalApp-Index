import React, {useRef} from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const FeedHeaderMenu = () => {
    const BottomSheetRef = useRef();
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Icon name="ellipsis-vertical" size={21} onPress={() => {
                BottomSheetRef.current.show()
            }} color="black" style={{
                alignItems: 'flex-end',
            }}/>
        </View>
    )
}

export default FeedHeaderMenu;
