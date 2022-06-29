import React, {useState, useContext} from "react";
import {Animated} from "react-native";
import {Context} from "@context";


export const BlockScreen = () => {
    const {
        state: {
            dimmedScreen: {visible, display},
        }
    } = useContext(Context);

    const opacity = useState(new Animated.Value(0))[0];
    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 0.4,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    visible ? fadeIn() : fadeOut();

    return (
        <Animated.View style={{
            display: display,
            opacity: opacity,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
        }}>
        </Animated.View>
    )
};

export default BlockScreen;
