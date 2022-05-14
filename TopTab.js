import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import StaticScreen from './screens/bottomTab/StaticTab';
import AssetScreen from './screens/bottomTab/AssetTab';
import HomeTab from './screens/bottomTab/HomeTab';
import SettingTab from './screens/bottomTab/SettingTab';


const TopTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="가계부" component={HomeTab} />
          <Tab.Screen name="통계" component={StaticScreen} />
          <Tab.Screen name="자산" component={AssetScreen} />
          <Tab.Screen name="설정" component={SettingTab} />
        </Tab.Navigator>
      );
}

5
export default TopTab;