import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import FeedTemplate from "@templates/FeedTemplate.js";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={style.container}>
                <FeedTemplate/>
                <FeedTemplate/>
                <FeedTemplate/>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }
})


export default HomeScreen;
