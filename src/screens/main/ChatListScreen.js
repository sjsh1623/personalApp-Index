import React, {useRef, useMemo, useCallback} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const ChatListScreen = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingLeft: 20,
            paddingRight: 20}}>
            <ScrollView>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center",
                }}>
                    <View style={{flexDirection: 'row', alignItems: "center", paddingBottom: 15}}>
                        <Image
                            style={{
                                width: 46,
                                height: 46,
                                borderColor: 'red',
                                borderRadius: 75
                            }}
                            source={require("@assets/profile-andrew.jpeg")}
                            resizeMode={"cover"}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{
                                fontSize: 15,
                            }}>임석현</Text>
                            <View style={{flexDirection: 'row', paddingTop: 3}}>
                                <Text style={{
                                    fontSize: 14,
                                }}>20 new messages</Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft : 2,
                                    marginRight: 2
                                }}>
                                    ·
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                }}>1d</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        marginRight : 5
                    }}>
                        <Icon name='ellipse' size={8} color="green"/>
                    </View>
                </View>
             </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})

export default ChatListScreen;
