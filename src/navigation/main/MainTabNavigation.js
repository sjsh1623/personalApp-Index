import HomeNavigation from "@navigations/main/HomeNavigation.js";
import ChatListScreen from "@screens/main/ChatListScreen.js";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {defaultScreenOptions} from "@res/navigationOptions.js";

const MainTabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={defaultScreenOptions}>
            <Tab.Screen name="HomeNavigation" component={HomeNavigation} />
            <Tab.Screen name="ChatListScreen" component={ChatListScreen} />
        </Tab.Navigator>
    );
}

export default MainTabNavigation;
