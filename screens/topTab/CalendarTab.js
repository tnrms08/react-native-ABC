import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react/cjs/react.production.min';

const CalendarTab = () => {
  return (
    <Calendar style={styles.calendar}/>
    
    )
}

const styles = StyleSheet.create({
  calendar: {
    height:"100%"
  },
})

export default CalendarTab;