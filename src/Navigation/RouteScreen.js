import React from 'react';
import { StatusBar, StyleSheet, View, Text, Image, Platform, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IMAGES from '../../assets';

import HomeScreen from '../Screens/HomeScreen';
import CommuScreen from '../Screens/CommuScreen';
import FreeBoardScreen from '../Screens/FreeBoardScreen';
import ChatScreen from '../Screens/ChatScreen';
import HomeScrapScreen from '../Screens/HomeScrapScreen';
import CommuScrapScreen from '../Screens/CommuScrapScreen';
import FreeBoardScrapScreen from '../Screens/FreeBoardScrapScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const Header = ({ name, navigation }) => (
    <SafeAreaView style={{ backgroundColor: 'white' }}>

        <View style={styles.header}>
            {name !== '마이페이지' && (
                <Image source={IMAGES.SWAPLOGOV2} resizeMode='contain' style={styles.logo} />
            )}
            {name !== '채팅' && name !== '마이페이지' && (
                <>
                    <View style={{ flexDirection: 'row', marginLeft: 'auto', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("SearchingPage")}>
                            <Image source={IMAGES.SEARCH} resizeMode="contain" style={styles.search} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("NotificationPage")}>
                            <Image source={IMAGES.BELL} resizeMode="contain" style={styles.notificationIcon} />
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {name === '채팅' && (
                <View style={{ marginLeft: 'auto' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("NotificationPage")}>
                        <Image source={IMAGES.BELL} resizeMode="contain" style={styles.notificationIconChat} />
                    </TouchableOpacity>
                </View>
            )}
            {name === '마이페이지' && (
                <View style={{ marginLeft: 'auto' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingPage")}>
                        <Image source={IMAGES.SETTING} resizeMode="contain" style={styles.setting} />
                    </TouchableOpacity>
                </View>
            )}

        </View >
    </SafeAreaView>
);

const CommunGroup = () => (
    <TopTab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { opacity: 0 },
        tabBarStyle: styles.topTapStyle,
        tabBarItemStyle: styles.topTapItemContainer,
        swipeEnabled: false,
        tabBarPressColor: 'transparent',
    }}>
        {TopTabIcon('커뮤니티', CommuScreen)}
        {TopTabIcon('자유게시판', FreeBoardScreen)}
    </TopTab.Navigator>
);

const ScrapGroup = () => (
    <TopTab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { opacity: 0 },
        tabBarStyle: styles.topTapStyle,
        tabBarItemStyle: styles.topTapItemContainer,
        swipeEnabled: false,
        tabBarPressColor: 'transparent',
    }}>
        {TopTabIcon('중고거래', HomeScrapScreen)}
        {TopTabIcon('커뮤니티', CommuScrapScreen)}
        {TopTabIcon('자유게시판', FreeBoardScrapScreen)}
    </TopTab.Navigator>
);

const TopTabIcon = (name, component) => (
    <TopTab.Screen
        name={name}
        component={component}
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={[styles.topTabBtn, {
                    backgroundColor: focused ? '#67574D' : '#FFFFFF',
                    borderWidth: focused ? 0 : 1,
                    borderColor: focused ? 'white' : '#D0D1D1',
                }]}>
                    <Text style={[styles.topTabFont, { color: focused ? '#FFFFFF' : '#000000' }]}>{name}</Text>
                </View>
            ),
        }}
    />
);

const BottomTabIcon = (name, focused) => {
    const icons = {
        중고거래: IMAGES.HOME,
        커뮤니티: IMAGES.COMMUNITY,
        채팅: IMAGES.CHAT,
        스크랩: IMAGES.SCRAP,
        마이페이지: IMAGES.PROFILE,
    };

    return (
        <View style={styles.bottomTabIconContainer}>
            <Image
                source={icons[name]}
                resizeMode="contain"
                style={[styles.bottomTabIcon, { tintColor: focused ? '#474747' : '#D1D1D1' }]}
            />
            <Text style={[styles.bottomTabFont, { color: focused ? '#474747' : '#D1D1D1' }]}>{name}</Text>
        </View>
    );
};


const TotalTab = (name, component, key, headerShown = true, navigation) => (
    <BottomTab.Screen
        name={key}
        component={component}
        options={{
            header: headerShown ? () => <Header name={name} navigation={navigation} /> : undefined,
            tabBarIcon: ({ focused }) => BottomTabIcon(name, focused),
        }}
    />
);

export default function RouteScreen({ navigation }) {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.bottomTabStyle,
            }}>
            {TotalTab('중고거래', HomeScreen, 'HomeScreen', true, navigation)}
            {TotalTab('커뮤니티', CommunGroup, 'CommunGroup', true, navigation)}
            {TotalTab('채팅', ChatScreen, 'ChatScreen', true, navigation)}
            {TotalTab('스크랩', ScrapGroup, 'ScrapGroup', true, navigation)}
            {TotalTab('마이페이지', ProfileScreen, 'ProfileScreen', true, navigation)}
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
        width: '95%',
        height: height * 0.1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width > 700 ? '80%' : '60%',
        height: height > 700 ? '80%' : '60%',
    },
    search: {
        width: width > 700 ? 28 : 23,
        height: width > 700 ? 28 : 23,
        tintColor: '#474747',
        marginRight: 15,
    },
    notificationIcon: {
        width: width > 700 ? 30 : 25,
        height: height > 700 ? 30 : 25,
    },
    notificationIconChat: {
        width: width > 700 ? 30 : 25,
        height: height > 700 ? 30 : 25,
    },
    setting: {
        width: width > 700 ? 30 : 25,
        height: height > 700 ? 30 : 25,
    },
    topTabBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.2,
        height: height * 0.035,
        borderRadius: 10,
        alignSelf: 'center',

    },
    topTabFont: {
        fontSize: width * 0.035,
        fontWeight: 'bold',
    },

    topTapStyle: {
        alignSelf: 'center',
        width: '100%',
        shadowColor: 'transparent',
    },
    topTapItemContainer: {
        width: width * 0.23,
    },
    bottomTabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 7,
    },
    bottomTabIcon: {
        width: width > 700 ? 40 : 30,
        height: height > 700 ? 40 : 30,
    },
    bottomTabFont: {
        fontSize: width > 700 ? 16 : 12,
    },
    bottomTabStyle: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        paddingHorizontal: 10,
        height: height * 0.1,
    },
});