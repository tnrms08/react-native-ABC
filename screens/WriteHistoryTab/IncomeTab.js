import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import DateTimePicker from 'react-native-modal-datetime-picker';

const IncomeTab = () => {

    const navigation = useNavigation()

    const bank=["농협","하나","카카오뱅크","신한","우리","현금"]
    const item=["용돈","장학금","이자","더치페이","기타"]

    const [money,setMoney]=useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row', marginBottom:20, marginTop:50}}>
          <Text style={{paddingRight: 25, fontSize:20, paddingTop:10}}>날짜</Text>
          <View style={{paddingHorizontal:65}}>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={{fontSize:20, paddingTop:10, color:'grey'}}>날짜 선택</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
          
        <View style={{flexDirection: 'row', marginBottom:20}}>
          <Text style={{paddingRight: 25, fontSize:20, paddingTop:10}}>자산</Text>
          <View>
            <SelectDropdown
              data={bank}
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
          <Text style={{paddingRight: 25, fontSize:20, paddingTop:10}}>분류</Text>
          <View>
            <SelectDropdown
              data={item}
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
          <Text style={{fontSize:20, paddingTop:10, paddingRight:80, alignItems:'center', justifyContent: "center"}}>금액</Text>
          <View>
            <TextInput
              placeholder='금액 입력'
              onChangeText={text=>setMoney(text)}
              style={{fontSize:20, paddingRight:70, paddingTop:10}}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:20, paddingTop:10, paddingRight:80, alignItems:'center', justifyContent: "center"}}>내용</Text>
          <View>
            <TextInput
              placeholder='내용 입력'
              onChangeText={text=>setMoney(text)}
              style={{fontSize:20, paddingRight:70, paddingTop:10}}
            />
          </View>
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
    flex: 2,
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