import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IncomeTab from './WriteHistoryTab/IncomeTab';
import ExpenseTab from './WriteHistoryTab/ExpenseTab';
import TransferTab from './WriteHistoryTab/TransferTab';

const AddScreen = () => {

    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="수입" component={IncomeTab} />
            <Tab.Screen name="지출" component={ExpenseTab} />
            <Tab.Screen name="이체" component={TransferTab} />
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
  
})

export default AddScreen;