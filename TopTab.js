import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import StaticTab from './screens/bottomTab/StaticTab';
import AssetTab from './screens/bottomTab/AssetTab';
import HomeTab from './screens/bottomTab/HomeTab';
import SettingTab from './screens/bottomTab/SettingTab';

import { FontAwesome5 } from '@expo/vector-icons';;
import { Ionicons } from '@expo/vector-icons';


const TopTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
          initialRouteName='가계부' screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="가계부"
            component={HomeTab}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Ionicons name="home" size={24} color="#e9664e" /> ) : (
                  <Ionicons name="home" size={24} color="gray" /> )
            }}
            />
          <Tab.Screen
          name="통계"
          component={StaticTab}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="stats-chart" size={24} color="#e9664e" /> ) : (
                <Ionicons name="stats-chart" size={24} color="gray" /> )
          }}
          />
          <Tab.Screen
            name="자산"
            component={AssetTab} 
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <FontAwesome5 name="coins" size={24} color="#e9664e" /> ) : (
                  <FontAwesome5 name="coins" size={24} color="gray" /> )
            }}
            />
          <Tab.Screen 
            name="설정" 
            component={SettingTab} 
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Ionicons name="settings-sharp" size={24} color="#e9664e" /> ) : (
                  <Ionicons name="settings-sharp" size={24} color="gray" /> )
            }}
            />
        </Tab.Navigator>
      );
}

export default TopTab;