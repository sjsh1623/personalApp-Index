import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;
