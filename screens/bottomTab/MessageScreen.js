import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.etcView}>
        <View  style={{flexDirection: "column"}}>
          <Text style={styles.etcTxt}>네이버페이{'\n'}</Text>
          <Text>05.24 14:00:07 </Text>
          <Text>입출금내역 안내 김*숙(4929) 05/24 14:00 출금 12,000원 네이버페이</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>

      <View style={styles.etcView}>
        <View  style={{flexDirection: "column"}}>
          <Text style={styles.etcTxt}>한진주{'\n'}</Text>
          <Text>05.24 11:30:51 </Text>
          <Text>입출금내역 안내 김*숙(4929) 05/24 11:30 입금 10,000원 한진주</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 30
  },
  etcView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
    paddingVertical: 20
  },
  etcTxt: {
    fontSize: 20
  }
});

export default MessageScreen;