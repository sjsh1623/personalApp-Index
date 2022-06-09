import {View, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";

const FeedMolecule = () => {
    return (
        // Molecule
        <View style={{
            height: 230,
            backgroundColor: 'white',
            width: '90%',
            marginTop: 10,
            borderWidth: 5,
            borderRadius: 8,
            borderColor: 'white'
        }}>
            <View style={{
                //Header atom
                height: '25%',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View style={{flexDirection: 'row', alignItems: "center", marginLeft: 10}}>
                    <Image
                        style={{
                            width: 42,
                            height: 42,
                            borderColor: 'red',
                            borderRadius: 75
                        }}
                        source={require("@assets/profile-andrew.jpeg")}
                        resizeMode={"cover"}/>
                    <Text style={{
                        marginLeft: 8,
                        fontWeight: "bold",
                        fontSize: 14,
                    }}>Tesfawfwafwaft</Text>
                </View>

                <View style={{
                    alignContent: 'flex-end',
                }}>
                    <Icon name="ellipsis-vertical" size={21} color="black" style={{
                        alignItems: 'flex-end',
                        marginRight: 5
                    }}/>
                </View>
            </View>
            <View
                //Summary atom
                style={{
                    paddingTop : 7,
                    paddingBottom : 7,
                    width: '100%',
                    height: '55%',
                    backgroundColor: 'white',
                }}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderColor: 'lightgrey',
                        alignSelf: 'flex-start',
                        paddingRight: 6,
                        paddingLeft: 6,
                        marginLeft: 8,
                        borderRadius: 10,
                        borderWidth: 3,
                    }}>
                        <Text>React Native</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderColor: 'lightgrey',
                        alignSelf: 'flex-start',
                        paddingRight: 6,
                        paddingLeft: 6,
                        marginLeft: 8,
                        borderRadius: 10,
                        borderWidth: 3,
                    }}>
                        <Text>MBTI</Text>
                    </View>
                </View>
                <View>
                    <Text>타이틀</Text>
                    <Text>써머리</Text>
                </View>
            </View>
            <View
                //Bottom atom
                style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'yellow',
                }}>
            </View>
        </View>
    )
}

export default FeedMolecule;
