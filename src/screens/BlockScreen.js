import React, {useState, useContext} from "react";
import {Animated} from "react-native";
import {Context} from "@context";

export const BlockScreen = (props) => {
    const opacity = useState(new Animated.Value(0))[0];
    const {
        state: {
            dimmedScreen: { display },
        },
    } = useContext(Context);

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

            opacity: opacity,
        }}>
        </Animated.View>

    )
};

export default BlockScreen;
