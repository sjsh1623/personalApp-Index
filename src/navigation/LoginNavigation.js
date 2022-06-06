import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/LoginScreen";

const LoginNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Main" component={LoginScreen}/>
            </Stack.Navigator>
    )
}


const screenOptions = {
    headerShown: false,
}


export default LoginNavigation;
