import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const LoginScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.textContainer}>
                <TextInput
                    style={style.textInput}
                    placeholder="ID"
                />
                <TextInput
                    style={style.textInput}
                    placeholder="Password"
                />
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Create account</Text>
                </TouchableOpacity>
            </View>
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
    textInput: {
        width: '70%',
        paddingTop: 7,
        paddingBottom: 5,
        paddingLeft: 10,
        borderBottomWidth: 1,
        fontSize: 15,
    },
    textContainer: {
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : '7%'
    },
    button: {
        marginBottom: 10,
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderRadius: 45,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoginScreen;
