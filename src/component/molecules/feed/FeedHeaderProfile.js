import {Image, Text, View} from "react-native";
import React from "react";

const FeedHeaderProfile = () => {
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Image
                style={{
                    width: 43,
                    height: 43,
                    borderColor: 'red',
                    borderRadius: 75
                }}
                source={require("@assets/profile-andrew.jpeg")}
                resizeMode={"cover"}/>

            <Text style={{
                marginLeft: 8,
                fontWeight: "bold",
                fontSize: 14,
            }}>Tesfawfwafwaft</Text>
        </View>
    )
}

export default FeedHeaderProfile;
