import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


const StaticScreen = () => {

  return (
    <View style={styles.container}>
      <Text>chart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  chart: {
    flex: 1
  }
});
export default StaticScreen;