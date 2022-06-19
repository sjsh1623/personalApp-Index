import React, {useState} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {bottomIcons} from "@res/bottomIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigation from "@navigations/main/HomeNavigation.js";
import ChatListScreen from "@screens/main/ChatListScreen.js";
import SearchScreen from "@screens/main/SearchScreen.js";
import {defaultTabOptions} from "@res/navigationOptions.js";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {DimmedProvider} from "@reducer/DimmedReducer"
import {BlockScreen} from "@screens/BlockScreen";


const MainTabNavigation = () => {
    const Tab = createBottomTabNavigator();
    const [blockScreen, setBlockScreen] = useState(false);
    const isBlockScreen = (isBlock) => setBlockScreen(isBlock);

    return (
        // Bottom Sheet 하단 Tab Navigation을 Cover하기 위해 Wrap
        // https://github.com/gorhom/react-native-bottom-sheet/issues/249
        <BottomSheetModalProvider style={{marginBottom: 100}}>
            <DimmedProvider>
                <Tab.Navigator
                    options={mainHeaderOption}
                    screenOptions={({route}) => (bottomTabOption(route))}>
                    <Tab.Screen name="Home" component={HomeNavigation} params={isBlockScreen}/>
                    <Tab.Screen name="Chat" component={ChatListScreen}/>
                    <Tab.Screen name="Search" component={SearchScreen}/>
                </Tab.Navigator>
            </DimmedProvider>
        </BottomSheetModalProvider>
    );
}

const mainHeaderOption = {
    headerBackVisible: false,
    title: '',
    headerLeft: ({onPress}) => (
        <TouchableOpacity onPress={onPress} style={{marginLeft: 20}}>
            <Text>Logo Here</Text>
        </TouchableOpacity>
    ),
    headerRight: ({onPress}) => (
        <TouchableOpacity onPress={onPress} style={{marginRight: 20}}>
            <Icon name='person-circle-outline' size={30} color="black"/>
        </TouchableOpacity>
    ),
    headerMode: 'none'
}

const bottomTabOption = (route) => {
    const tabBarOption = {
        tabBarIcon: ({focused}) => {
            const icon = bottomIcons[route.name];
            const focusIcon = focused ? '' : '-outline'
            return <Icon name={icon + focusIcon} size={21} color="black"/>;
        },
    }

    return {...defaultTabOptions, ...tabBarOption, ...mainHeaderOption}
}

export default MainTabNavigation;
