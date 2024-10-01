import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ChatScreen() {
    return (
        <View style={styles.container}>

            <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>
                채팅</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

});
