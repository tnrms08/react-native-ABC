import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DayTab from '../topTab/DayTab'
import MonthTab from '../topTab/MonthTab'
import CalendarTab from '../topTab/CalendarTab'
import BudgetTab from '../topTab/BudgetTab'

const HomeTab = () => {

    const navigation = useNavigation()
    const Tab = createMaterialTopTabNavigator();

    return (
      <Tab.Navigator 
        style={styles.tobTab}
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
  tobTab: {
    paddingTop: 35
  }
})

export default HomeTab;