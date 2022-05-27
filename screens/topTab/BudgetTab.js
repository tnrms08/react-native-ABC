import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FAB } from 'react-native-elements';

import { Table, Row, Rows } from 'react-native-table-component';

export default class BudgetTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['품목', '목표금액','사용금액'],
      tableData: [
        ['식비','300,000원','100,000원'],
        ['인터넷 쇼핑','300,000원','50,000원'],
        ['총 예산','1,000,000원','150,000원'],
      ]
    }
  }

  render() {

    const state = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#f7ccc5'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <FAB
          color='#e9664e'
          icon={{ name: 'create', color: "white"}}
          placement="right"
          onPress={()=>navigation.navigate('예산작성')}
          />
      </View>
    )
  }
}
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {textAlign:'center', height: 40, backgroundColor: '#f7ccc5' },
    text: { margin: 6 }
  });
