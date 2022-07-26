import {View, SafeAreaView, StyleSheet, TextInput} from "react-native";

const LoginScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <TextInput
                style={style.textInput}
                placeholder="useless placeholder"
            />
            <TextInput
                style={style.textInput}
                placeholder="useless placeholder"
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {}
})

export default LoginScreen;
