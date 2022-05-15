import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const IncomeTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <View>
          <Text>날짜</Text>
        </View>
        <View>
          <Text>자산</Text>
        </View>
        <View>
          <Text>분류</Text> 
        </View>
        <View>
          <Text>금액</Text>
        </View>
        <View>
          <Text>내용</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonText}>저장하기</Text>
          </TouchableOpacity>
        </View>
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

export default IncomeTab;