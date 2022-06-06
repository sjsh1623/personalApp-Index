import OnBoardingScreen from '@screens/onboarding/OnBoardingScreen.js';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const OnBoardingNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen}/>
        </Stack.Navigator>
    )
}


const screenOptions = {
    headerShown: false,
}


export default OnBoardingNavigation;
