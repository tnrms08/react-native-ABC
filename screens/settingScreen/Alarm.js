import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch, Pressable } from 'react-native';

const BudgetAlarm = () => {

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

export default BudgetAlarm;