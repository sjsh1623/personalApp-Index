import {Image, Text, View} from "react-native";
import React from "react";
import UserImage from "@atoms/UserImage";

const FeedHeaderProfile = () => {
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <UserImage
                radius={40}
                path={require('@assets/profile-andrew.jpeg')}/>

            <Text style={{
                marginLeft: 8,
                fontWeight: "bold",
                fontSize: 14,
            }}>임석현</Text>
        </View>
    )
}

export default FeedHeaderProfile;
