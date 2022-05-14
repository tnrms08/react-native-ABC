import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './Root';

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default App;