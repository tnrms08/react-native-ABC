import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <Text>SettingTab</Text>
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

export default SettingTab;