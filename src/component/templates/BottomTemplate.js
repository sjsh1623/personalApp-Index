import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import BottomSheet, {
    BottomSheetView, BottomSheetModalProvider,
    BottomSheetModal,
    TouchableWithoutFeedback,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Ionicons";


const Test = (bottomSheetModalRef) => {
    // ref
    const bottomSheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    // variables
    const snapPoints = useMemo(() => ['25%', '30%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    handlePresentModalPress()

    // renders
    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Button
                    onPress={handlePresentModalPress}
                    title="Present Modal"
                    color="black"
                />
                <BottomSheetModal
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    enableHeaderGestures={true}
                    enableContentGestures={false}
                    onClose={() => setIsOpen(false)}
                    onChange = {handleSheetChanges()}
                >
                    <View style={{alignItems: "center", marginTop: 20}}>
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
        </BottomSheetModalProvider>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Test;
