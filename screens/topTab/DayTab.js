import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements'

const DayTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
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
    alignItems: 'center'
  },
})

export default DayTab;