import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@screens/main/HomeScreen";

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}


const screenOptions = {
    headerShown: false,
}


export default HomeNavigation;
