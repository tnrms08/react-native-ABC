import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DayTab from '../topTab/DayTab'
import MonthTab from '../topTab/MonthTab'
import CalendarTab from '../topTab/CalendarTab'
import BudgetTab from '../topTab/BudgetTab'

import { Ionicons } from '@expo/vector-icons';

const HomeTab = () => {

    const navigation = useNavigation()
    const Tab = createMaterialTopTabNavigator();


    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: ()=>
          <View style={{flexDirection:"row"}}>
            <Ionicons name="mail" size={35} color="#e9664e" style={{paddingHorizontal:10}} onPress={()=>navigation.navigate('메시지')}/>
            <Ionicons name="person-circle" size={35} color="#e9664e" style={{paddingHorizontal:10}} onPress={()=>navigation.navigate('계정정보')}/>
          </View>
      });
    }, []);


    return (

      <Tab.Navigator 
        screenOptions={{
          tabBarIndicatorStyle:
          {
            backgroundColor: '#e9664e' 
          }
        }}
        >
        <Tab.Screen name="일별" component={DayTab} />
        <Tab.Screen name="월별" component={MonthTab} />
        <Tab.Screen name="달력" component={CalendarTab} />
        <Tab.Screen name="예산" component={BudgetTab} />
      </Tab.Navigator>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default HomeTab;