import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import IMAGES from '../../../assets';


export default function SettingPage({ navigation }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate("RouteScreen")}>
                <Image source={IMAGES.BACK} resizeMode="contain" tintColor="white" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
});
