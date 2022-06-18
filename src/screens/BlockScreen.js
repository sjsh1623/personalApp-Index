import React, {useState} from "react";
import {Animated, Text, View, StyleSheet, Button} from "react-native";

export const BlockScreen = (props) => {
    const opacity = useState(new Animated.Value(0))[0];
    const fadeIn = () => {

        Animated.timing(opacity, {
            toValue : 0.4,
            duration : 1000,
            useNativeDriver : true
        }).start();
    }
    const fadeOut = () => {

        Animated.timing(opacity, {
            toValue : 0,
            duration : 1000,
            useNativeDriver : true
        }).start();
    }

    return (
        <Animated.View style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            opacity: opacity,
        }}>
        </Animated.View>

    )
};

export default BlockScreen;
