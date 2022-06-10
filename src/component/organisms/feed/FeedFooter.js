import {View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const FeedFooter = () => {
    return (
        <View
            //Bottom atom
            style={{
                width: '100%',
                height: '15%',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
                borderTopWidth : .5,
                borderTopColor: '#e1e5eb',
                marginTop : 5,
                paddingTop : 5
            }}>
            <View style={{flexDirection: 'row', alignItems: "center"}}>

                <Icon name="heart-outline" size={27} color="black" style={{
                    alignItems: 'flex-end',
                }}/>

                <Icon name="chatbubble-outline" size={27} color="black" style={{
                    alignItems: 'flex-end',
                    marginLeft: 12
                }}/>
            </View>

            <View style={{flexDirection: 'row', alignItems: "center"}}>
                <Icon name="bookmark-outline" size={27} color="black" style={{
                    alignItems: 'flex-end',
                }}/>
            </View>
        </View>
    )
}

export default FeedFooter;
