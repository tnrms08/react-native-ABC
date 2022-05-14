import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SigninScreen from './screens/SigninScreen';

const Stacks = createNativeStackNavigator();

const Stack = () => {
    return (
        <Stacks.Navigator>
            <Stacks.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stacks.Screen name="로그인" component={SigninScreen} />
            <Stacks.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </Stacks.Navigator>
    );
};

export default Stack;