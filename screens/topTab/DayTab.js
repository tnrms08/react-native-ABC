import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements';

import WeeklyCalendar from 'react-native-weekly-calendar'; 

const DayTab = () => {

    const navigation = useNavigation()

    const sampleEvents = [
      { 'start': '2020-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
      { 'start': '2020-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
      { 'start': '2020-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
      { 'start': '2020-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
      { 'start': '2020-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
      { 'start': '2020-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
      { 'start': '2020-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
      { 'start': '2020-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
      { 'start': '2020-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
      { 'start': '2020-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
    ]

    return (
      <View style={styles.container}>
        <WeeklyCalendar
          events={sampleEvents}
          style={{ height:"100%" }}
          startWeekday={1}
          locale='ko'
          themeColor={'#e9664e'}
          titleStyle={{color: "#e9664e", padding:10, fontSize:20}}
        />
        <FAB
          color='#e9664e'
          icon={{ name: 'create', color: "white"}}
          placement="right"
          onPress={()=>navigation.navigate('내역추가')}
          />
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

export default DayTab;