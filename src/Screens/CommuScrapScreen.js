import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';

import IMAGES from '../../assets';

const DATA = new Array(50).fill(0).map((_, index) => ({ id: index }));
const { width, height } = Dimensions.get('window');

export default function CommuScrapScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={DATA}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 20,

                }}
                renderItem={() => {
                    return (
                        <TouchableOpacity style={styles.listView} onPress={() => navigation.navigate("CommuDetailPage")}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.photo}></View>
                                    <Image source={IMAGES.REDHEART}
                                        resizeMode='contain'
                                        style={{ height: 20, width: 20, marginTop: 15, marginLeft: 30, }}>
                                    </Image>
                                </View>
                                <Text style={styles.title}>LG 부트캠프 모집</Text>
                                <Text style={styles.contentsFont}>소프트웨어 인재를 양성할 목적으로 설립한 교육기관 이노베이션 아케데미에서 운녕하는 교육과정이며...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, marginLeft: 15 }}>
                                    <Image source={IMAGES.PEOPLE}
                                        resizeMode='contain'
                                        style={{ height: 10, width: 10, }}>
                                    </Image>
                                    <Text style={styles.iconFont}>9</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    listView: {
        width: width > 400 ? 175 : 160,
        height: height > 700 ? 170 : 175,
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#CDCDCD',
        // shadowColor: "#000000",
        // shadowOpacity: 0.1,
        // shadowRadius: 15,
    },
    photo: {
        width: 70,
        height: 70,
        margin: 10,
        borderColor: "#D0D1D1",
        borderWidth: 1,
        borderRadius: 5

    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    contentsFont: {
        width: 130,
        height: 30,
        fontSize: 8,
        color: '#515a5a',
        marginLeft: 15,
        marginTop: 6,
    },
    iconFont: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
    },
});
