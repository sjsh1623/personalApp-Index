import {View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const FeedHeaderMenu = (props) => {
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Icon name="ellipsis-vertical" size={21} onPress={() => {
                props.optionSheet.openBottomSheet(true);
            }} color="black" style={{
                alignItems: 'flex-end',
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default FeedHeaderMenu;
