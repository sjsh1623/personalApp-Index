import { useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Ionicons";


const BottomTemplate = (props) => {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['20%', '20%'], []);
    if (props.control.openOption) bottomSheetRef.current?.present();

    return (
        <View>
            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                backgroundStyle={{backgroundColor: '#f9f9f9'}}
                enablePanDownToClose={true}
                enableHeaderGestures={true}
                enableContentGestures={false}
                index={1}
                onDismiss={() => {
                    props.control.openBottomSheet(false);
                }}>

                <View style={{alignItems: "center", marginTop: 20, flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <View style={{alignItems: "center",}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: 'center',
                                borderWidth: 1,
                                width: 55,
                                height: 55,
                                marginLeft: 25,
                                marginRight: 25,
                                borderRadius: 45
                            }}>
                                <Icon name="share-social-outline" size={27} color="black" style={{
                                    alignItems: 'flex-end',
                                }}/>
                            </View>
                            <Text style={{marginTop: 7}}>Share</Text>
                        </View>
                        <View style={{alignItems: "center",}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: 'black',
                                width: 55,
                                height: 55,
                                marginLeft: 25,
                                marginRight: 25,
                                borderRadius: 45
                            }}>
                                <Icon name="link-outline" size={27} color="black" style={{
                                    alignItems: 'flex-end',
                                }}/>
                            </View>
                            <Text style={{marginTop: 7}}>Link</Text>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: 'red',
                                width: 55,
                                height: 55,
                                marginLeft: 25,
                                marginRight: 25,
                                borderRadius: 45
                            }}>
                                <Icon name="alert-outline" size={27} color="red" style={{
                                    alignItems: 'flex-end',
                                }}/>
                            </View>
                            <Text style={{marginTop: 7, color: 'red'}}>Report</Text>
                        </View>
                    </View>
                </View>
            </BottomSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomTemplate;
