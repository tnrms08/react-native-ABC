import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

const SigninScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck]=useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return(
        <View
            style={styles.container}
            behavior="padding"
        >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="메일주소"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        {/*
        <TextInput
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChangeText={text => setPasswordCheck(text)}
          style={styles.input}
          secureTextEntry
        />
    */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#e9664e',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#e9664e',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#e9664e',
    fontWeight: '700',
    fontSize: 16,
  },
})