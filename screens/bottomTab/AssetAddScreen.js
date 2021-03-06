import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import SelectDropdown from 'react-native-select-dropdown'

const AssetAddScreen = () => {

    const navigation = useNavigation();

    const group=["현금","은행","저축"]

    const [money,setMoney]=useState('');

    return (
        <View style={styles.container}>

          <View style={{flexDirection: 'row', marginBottom:20}}>
            <Text style={{paddingRight: 25, fontSize:20, paddingTop:10}}>그룹</Text>
            <View>
              <SelectDropdown
                data={group}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
                defaultButtonText="선택"
                buttonStyle={{backgroundColor:'white'}}
                buttonTextStyle={{color:'grey'}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom:20}}>
            <Text style={{fontSize:20, paddingTop:10, paddingRight:80, alignItems:'center', justifyContent: "center"}}>자산</Text>
            <View>
              <TextInput
                placeholder='자산 입력'
                onChangeText={text=>setMoney(text)}
                style={{fontSize:20, paddingRight:70, paddingTop:10}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom:20}}>
            <Text style={{fontSize:20, paddingTop:10, paddingRight:80, alignItems:'center', justifyContent: "center"}}>금액</Text>
            <View>
              <TextInput
                placeholder='금액 입력'
                onChangeText={text=>setMoney(text)}
                style={{fontSize:20, paddingRight:70, paddingTop:10}}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={() => {
              navigation.goBack();
            }}
            >
              <Text style={styles.buttonText}>저장하기</Text>
          </TouchableOpacity>
        </View>
        
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
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
        marginTop: 70,
        borderColor: '#e9664e',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
  })
  

export default AssetAddScreen;