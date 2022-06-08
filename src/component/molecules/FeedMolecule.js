import {View, Text} from "react-native";

const FeedMolecule = () => {
    return (
        // Molecule
        <View style = {{
            height : 230,
            backgroundColor: 'white',
            width : '90%',
            marginTop : 10
        }}>
            //Header atom
            <View style = {{
                width: '100%',
                height: '20%',
                backgroundColor : 'black',
            }}>
            </View>
            //Summary atom
            <View
                style = {{
                    width: '100%',
                    height: '60%',
                    backgroundColor : 'blue',
                }}>
            </View>
            //Bottom atom
            <View
                style = {{
                    width: '100%',
                    height: '20%',
                    backgroundColor : 'yellow',
                }}>
            </View>
        </View>
    )
}

export default FeedMolecule;
