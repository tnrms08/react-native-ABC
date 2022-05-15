import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from "../../firebase";

const AccountDelete = () => {

    const navigation = useNavigation()
    
    {/*
    const user = auth.currentUser;

    const accountDelete = () => {
      user.delete().then(() => {
      // User deleted.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
  */}

    return (
      <View style={styles.container}>
        <Text style={styles.text}>계정 : {auth.currentUser?.email}</Text>
        <Text></Text>
        <Text>계정삭제를 원하시면 하단의 버튼을 눌러주세요</Text>
        <Text>삭제한 계정은 복구할 수 없습니다.</Text>
        <TouchableOpacity
          //onPress={accountDelete}
          style={styles.button}
        >
          <Text style={styles.buttonText}>계정삭제</Text>
        </TouchableOpacity>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#e9664e',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  text: {
    fontSize: 20
  },
})

export default AccountDelete;