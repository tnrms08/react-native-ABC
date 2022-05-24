import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements';

const AssetTab = () => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <FAB
          color='#e9664e'
          icon={{ name: 'create', color: "white"}}
          placement="right"
          onPress={()=>navigation.navigate('자산작성')}
          />

        <View style={styles.list}>
          
          <Text style={styles.text}>현금</Text>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.innerTextLeft}>현금</Text>
            <Text style={styles.innerTextRight}>300,000원</Text>
          </View>

          <Text style={styles.text}>은행</Text>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.innerTextLeft}>농협1</Text>
            <Text style={styles.innerTextRight}>1,000,000원</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.innerTextLeft}>제주은행</Text>
            <Text style={styles.innerTextRight}>3,000,000원</Text>
          </View>

        </View>
        
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'white'
  },
  list: {
    width: '100%',
    marginTop:50
  },
  text: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f7ccc5',
    fontSize:20
  },
  innerTextLeft: {
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize:20
  },
  innerTextRight:{
    width: "60%",
    paddingVertical: 10,
    paddingHorizontal: 65,
    marginLeft:50,
    fontSize:20,
  },
})

export default AssetTab;