import React, {useState, useContext} from "react";
import {Animated} from "react-native";
import {DimmedContext} from "@reducer/DimmedReducer";

export const BlockScreen = (props) => {
    const opacity = useState(new Animated.Value(0))[0];
    const {display} = useContext(DimmedContext);

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 0.4,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    return (
        <Animated.View style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            display: display,
            opacity: opacity,
        }}>
        </Animated.View>

    )
};

export default BlockScreen;
