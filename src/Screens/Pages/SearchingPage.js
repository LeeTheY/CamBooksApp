import { StyleSheet, View, TouchableOpacity, Image, Animated, Text, FlatList } from 'react-native';
import React from 'react';

const DATA = new Array(50).fill(0).map((_, index) => ({ id: index }));

import IMAGES from '../../../assets';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function SearchingPage({ navigation }) {
    const scrolling = React.useRef(new Animated.Value(0)).current;
    const height = scrolling.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 50],
        extrapolate: 'clamp',
    });

    const onScroll = (e) => {

        const position = e.nativeEvent.contentOffset.y;

        scrolling.setValue(position);
    };

    return (
        <View>
            <Animated.View style={{ height, backgroundColor: 'orange' }}>
                <SafeAreaView>

                    <View style={styles.container}>

                        <TouchableOpacity onPress={() => navigation.navigate("RouteScreen")}>
                            <Image source={IMAGES.BACK} resizeMode="contain" tintColor="white" />
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </Animated.View>

            <Animated.FlatList scrollEventThrottle={16} onScroll={onScroll}
                data={DATA}
                // contentContainerStyle={{ paddingTop: 40 }}
                renderItem={() => {
                    return (
                        < TouchableOpacity style={styles.listView} onPress={() => navigation.navigate("HomeDetailPage")}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.photo}></View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.collegeFont}>서울대</Text>
                                        <Text style={styles.title}>전공책 5개 팝니다~</Text>
                                    </View>
                                    <Text style={styles.priceFont}>30,000원</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 6, }}>
                                        <Image source={IMAGES.REDHEART}
                                            resizeMode='contain'
                                            style={{ height: 15, width: 15, }}>
                                        </Image>
                                        <Text style={styles.iconFont}>30</Text>
                                        <Image source={IMAGES.EYE}
                                            resizeMode='contain'
                                            style={{ height: 18, width: 18, }}>
                                        </Image>
                                        <Text style={styles.iconFont}>50</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}></View>
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
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        height: 400,
    },
    listView: {
        width: 364,
        height: 86,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    line: {
        borderBottomColor: '#CDCDCD',
        borderBottomWidth: 0.5,
        width: 350,
        height: 1,
        marginTop: 13,
        alignSelf: 'center'
    },
    photo: {
        width: 75,
        height: 75,
        marginLeft: 10,
        borderColor: "#E9E9E9",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'orange',
    },
    collegeFont: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    priceFont: {
        fontSize: 14,
        marginLeft: 15,
        marginTop: 6,
    },
    iconFont: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
        marginRight: 5,
    },
});
// return (
//     <View style={styles.container}>

//         <TouchableOpacity onPress={() => navigation.navigate("NaviScreen")}>
//             <Image source={IMAGES.BACK} resizeMode="contain" tintColor="white" />
//         </TouchableOpacity>

//     </View>
// );