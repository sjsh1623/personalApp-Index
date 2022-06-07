import {SafeAreaView, Text} from "react-native";
import FeedMolecule from "@molecules/FeedMolecule.js";
import HomeStyle from './style/HomeStyle';


const HomeScreen = () => {
return(
    <SafeAreaView  style={HomeStyle.container}>
        <FeedMolecule/>
    </SafeAreaView>
)
}

export default HomeScreen;
