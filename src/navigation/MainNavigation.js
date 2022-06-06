import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/LoginScreen";
import MainScreen from "../screens/main/MainScreen";

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
    )
}


const screenOptions = {
    headerShown: false,
}


export default MainNavigation;
