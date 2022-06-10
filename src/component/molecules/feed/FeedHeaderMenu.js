import {View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const FeedHeaderMenu = () => {
return(
    <View style={{flexDirection: 'row', alignItems: "center"}}>
        <Icon name="ellipsis-vertical" size={21} color="black" style={{
            alignItems: 'flex-end',
        }}/>
    </View>
)
}

export default FeedHeaderMenu;
