import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Screens/SplashScreen';

import RouteScreen from './src/Navigation/RouteScreen';

import HomeScreen from './src/Screens/HomeScreen';


import CommuScreen from './src/Screens/CommuScreen';
import FreeBoardScreen from './src/Screens/FreeBoardScreen';

import ChatScreen from './src/Screens/ChatScreen';

import HomeScrapScreen from './src/Screens/HomeScrapScreen';
import CommuScrapScreen from './src/Screens/CommuScrapScreen';
import FreeBoardScrapScreen from './src/Screens/FreeBoardScrapScreen';

import ProfileScreen from './src/Screens/ProfileScreen';


import HomePostPage from './src/Screens/Pages/HomePostPage';
import CommuPostPage from './src/Screens/Pages/CommuPostPage';
import FreeBoardPostPage from './src/Screens/Pages/FreeBoardPostPage';

import NotificationPage from './src/Screens/Pages/NotificationPage';
import SearchingPage from './src/Screens/Pages/SearchingPage';
import SettingPage from './src/Screens/Pages/SettingPage';

import HomeDetailPage from './src/Screens/Pages/HomeDetailPage';
import CommuDetailPage from './src/Screens/Pages/CommuDetailPage';
import FreeBoardDetailPage from './src/Screens/Pages/FreeBoardDetailPage';



const Stack = createNativeStackNavigator();

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
  })

  return (
    <>
      {isShowSplash ? (<SplashScreen />) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RouteScreen">
            <Stack.Screen name="RouteScreen" component={RouteScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

            <Stack.Screen name="CommuScreen" component={CommuScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FreeBoardScreen" component={FreeBoardScreen} options={{ headerShown: false }} />

            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />

            <Stack.Screen name="HomeScrapScreen" component={HomeScrapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CommuScrapScreen" component={CommuScrapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FreeBoardScrapScreen" component={FreeBoardScrapScreen} options={{ headerShown: false }} />

            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />


            <Stack.Screen name="HomePostPage" component={HomePostPage} options={{ headerShown: false }} />
            <Stack.Screen name="CommuPostPage" component={CommuPostPage} options={{ headerShown: false }} />
            <Stack.Screen name="FreeBoardPostPage" component={FreeBoardPostPage} options={{ headerShown: false }} />

            <Stack.Screen name="NotificationPage" component={NotificationPage} options={{ headerShown: false }} />
            <Stack.Screen name="SearchingPage" component={SearchingPage} options={{ headerShown: false }} />
            <Stack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />

            <Stack.Screen name="HomeDetailPage" component={HomeDetailPage} options={{ headerShown: false }} />
            <Stack.Screen name="CommuDetailPage" component={CommuDetailPage} options={{ headerShown: false }} />
            <Stack.Screen name="FreeBoardDetailPage" component={FreeBoardDetailPage} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};