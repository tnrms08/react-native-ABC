import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { auth } from '../../firebase';
import AssetScreen from './AssetTab';
import { Ionicons } from '@expo/vector-icons';

const SettingTab = () => {

  const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingRight:'30%', paddingBottom:"7%"}}>
          <Ionicons name="person" size={70} color="#e9664e" />
          <Text style={{fontSize: 15, paddingLeft:30, paddingTop: 40}}>{auth.currentUser?.email}</Text>
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>품목 관리</Text>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('수입분류 관리')}>
              <Text>수입분류 관리</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('지출분류 관리')}>
              <Text>지출분류 관리</Text>
            </TouchableOpacity>
          </ListItem>
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>계정관리</Text>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('로그아웃')}>
              <Text>로그아웃</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('계정삭제')}>
              <Text>계정삭제</Text>
            </TouchableOpacity>
          </ListItem>
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>알람관리</Text>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('예산알람')}>
              <Text>예산 알람</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity onPress={()=>navigation.navigate('가계부 작성 알람')}>
              <Text>가계부 작성 알람</Text>
            </TouchableOpacity>
          </ListItem>
        </View>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%'
  },
  text: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f7ccc5',
  }
})

export default SettingTab;