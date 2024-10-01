import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React from 'react';

import IMAGES from '../../assets';


const DATA = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function FreeBoardScrapScreen({ navigation }) {
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
                                        <Text style={styles.title}>개강 너무 싫다</Text>
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
