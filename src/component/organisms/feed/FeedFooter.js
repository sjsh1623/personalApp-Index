import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {iconAction} from "@stores/actions/touch.js";

const FeedFooter = () => {
    const [like, setLike] = useState(false);
    const [bookmark , setBookmark] = useState(false);

    return (
        <View
            //Bottom atom
            style={style.container}>
            <View style={{flexDirection: 'row', alignItems: "center"}}>
                <Icon name={like ? "heart" : "heart-outline"}
                      onPress ={() => setLike(!like)}
                      size={27}
                      color={like ? '#FF7F7F': 'black'}
                      style={{
                    alignItems: 'flex-end',
                }}/>

                <Icon name="chatbubble-outline" size={27} color="black" style={{
                    alignItems: 'flex-end',
                    marginLeft: 12
                }}/>
            </View>

            <View style={{flexDirection: 'row', alignItems: "center"}}>
                <Icon name={bookmark ? "bookmark" : "bookmark-outline"}
                      onPress ={() => setBookmark(!bookmark)}
                      size={27}
                      color="black"
                      style={{
                    alignItems: 'flex-end',
                }}/>
            </View>
        </View>
    )
}

const style =  StyleSheet.create({
    'container' : {
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
    }
})

export default FeedFooter;
