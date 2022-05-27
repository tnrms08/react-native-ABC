import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch, Pressable, Button } from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";


const Alarm = () => {


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


    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, marginBottom:40,color:'white',padding:10, borderRadius: 10, backgroundColor:"#e9664e"}}>알람 설정</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingRight: 65, fontSize:20}}>알람</Text>
          <Text style={{fontSize:20, paddingRight: 10}}>On</Text>
          <Switch 
          trackColor={{ false: "#e9664e", true: "gray" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f7ccc5"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
          <Text style={{fontSize:20, paddingLeft: 5, paddingRight:45}}>Off</Text>
        </View>
        

        <View style={{flexDirection: 'row', marginBottom:20, marginTop:10}}>
          <Text style={{paddingRight: 25, fontSize:20, paddingTop:10}}>시간</Text>
          <View style={{paddingHorizontal:65}}>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={{fontSize:20, paddingTop:10, color:'grey'}}>시간 선택</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>



      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Alarm;
