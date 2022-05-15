import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BudgetAddScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                예산작성
            </Text>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonText}>저장하기</Text>
            </TouchableOpacity>
        </View>
        
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
        backgroundColor: '#e9664e',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5
      },
      buttonOutline: {
        backgroundColor: '#e9664e',
        marginTop: 5,
        borderColor: '#e9664e',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
  })
  

export default BudgetAddScreen;