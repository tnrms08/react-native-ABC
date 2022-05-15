import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements';

const BudgetTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <Text>Budget</Text>
        <FAB
          color='#e9664e'
          icon={{ name: 'create', color: "white"}}
          placement="right"
          onPress={()=>navigation.navigate('예산작성')}
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

export default BudgetTab;