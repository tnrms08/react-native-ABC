import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
//import { Calendar, Agenda } from 'react-native-calendars';
import { useState } from 'react/cjs/react.production.min';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const CalendarTab = () => {

  const createThreeButtonAlert = () =>
  Alert.alert(
    "소비상태 선택",
    "해당 날짜의 소비 상태를 선택하세요.",
    [
      {
        text: "상",
        onPress: () => console.log("green")
      },
      {
        text: "중",
        onPress: () => console.log("yello")
      },
      { 
        text: "하",
        onPress: () => console.log("red") 
      }
    ],
    { cancelable: false }
  );

  return (
    <Calendar 
      style={styles.calendar}
      onDayPress={day => {
        console.log('selected day', day);
      }, createThreeButtonAlert}
      markingType={'multi-dot'}
      markedDates={{
        '2022-05-18': {selected: true, marked: true, selectedColor: '#006400'},
        '2022-05-19': {selected: true, marked: true, selectedColor: '#FF8C00'},
        '2022-05-20': {selected: true, marked: true, selectedColor: 'red'}
      }}
      theme={{
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#e9664e',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: '#e9664e',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: '#e9664e',
        indicatorColor: '#e9664e',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 16
      }}
      />
    
    )
}

const styles = StyleSheet.create({
  calendar: {
    height:"100%"
  },
})

export default CalendarTab;