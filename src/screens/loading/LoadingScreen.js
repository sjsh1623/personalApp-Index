import {useEffect} from "react";
import {AsyncStorage, Image, SafeAreaView} from "react-native";
import commonStyle from '@res/commonStyle.js';

const LoadingScreen = ({navigation}) => {
    useEffect(() => {
        const nextScreen = async () => {
            const isTokenExist = false;
            const isLaunchedOnce = await AsyncStorage.getItem('isLaunchedOnce') === 'true';
            if (isTokenExist) return 'Main';
            if (isLaunchedOnce) return 'Login';

            AsyncStorage.setItem('isLaunchedOnce', 'true')
            return 'OnBoarding'
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
