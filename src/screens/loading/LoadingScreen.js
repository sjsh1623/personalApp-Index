import React, {useEffect} from "react";
import {Image, SafeAreaView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonStyle from '@res/commonStyle.js';

const LoadingScreen = ({navigation}) => {
    useEffect(() => {
        const nextScreen = async () => {
            const isTokenExist = false; // 이미 로그인이 되어있을때 즉, 토큰이 존재할때
            const isLaunchedOnce = await AsyncStorage.getItem('isLaunchedOnce') === 'true'; // 한번이라도 앱실행을 했는지 여부
            if (isTokenExist) return 'MainNavigation';
            //if (isLaunchedOnce) return 'OnBoardingNavigation';
            await AsyncStorage.setItem('isLaunchedOnce', 'true')
            return 'LoginNavigation'
        };

        nextScreen().then((screen) => {
            navigation.reset({routes: [{name: screen}]})
        })
    })

    return (
        <SafeAreaView style={commonStyle.primary.container}>
            <Image style={commonStyle.image.smallLogo} source={require('@assets/icon.png')}/>
        </SafeAreaView>
    )
}

export default LoadingScreen;
