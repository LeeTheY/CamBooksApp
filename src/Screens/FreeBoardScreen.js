import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';

import IMAGES from '../../assets';

const DATA = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function FreeBoard({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={() => {
                    return (
                        < TouchableOpacity style={styles.listView} onPress={() => navigation.navigate("FreeBoardDetailPage")}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.title}>개강이다</Text>
                                    </View>
                                    <Text style={styles.contentsFont}>ㅈㄱㄴ ㅈㄱㄴ</Text>




                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 6, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <Image source={IMAGES.POSTPROFILE}
                                                resizeMode='contain'
                                                style={{ height: 15, width: 15, }}>
                                            </Image>
                                            <Text style={styles.nameFont}>홍길동</Text>
                                            <Text style={styles.timeFont}>14:54</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 180 }}>

                                            <Image source={IMAGES.REDHEART}
                                                resizeMode='contain'
                                                style={{ height: 10, width: 10, }}>
                                            </Image>
                                            <Text style={styles.iconFont}>8</Text>
                                            <Image source={IMAGES.COMMENT}
                                                resizeMode='contain'
                                                style={{ height: 11, width: 11, }}>
                                            </Image>
                                            <Text style={styles.iconFont}>32</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }

                }
            />

            < TouchableOpacity
                style={styles.additBtn}
                onPress={() => navigation.navigate("FreeBoardPostPage")}>
                <Image
                    source={IMAGES.PLUS}
                    resizeMode='contain'
                    style={{
                        height: 25,
                        width: 25,
                    }} />
            </TouchableOpacity >




        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listView: {
        width: 365,
        height: 90,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CDCDCD',

    },
    additBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#59B283',
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 20,
        position: 'absolute',
        bottom: 30,
        right: 25,
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    contentsFont: {
        fontSize: 11,
        color: '#515a5a',
        marginLeft: 15,
        marginTop: 6,
    },
    nameFont: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 5,
    },
    timeFont: {
        fontSize: 11,
        color: 'gray',
        marginLeft: 5,
    },
    iconFont: {
        fontSize: 9,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
        marginRight: 5,
    },
});
