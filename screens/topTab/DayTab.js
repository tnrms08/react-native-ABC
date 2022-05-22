import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements';

import WeeklyCalendar from 'react-native-weekly-calendar'; 

const DayTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <WeeklyCalendar
          //events={sampleEvents}
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
    backgroundColor:'white'
  },
})

export default DayTab;