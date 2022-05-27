import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FAB } from 'react-native-elements';

import { Table, Row, Rows } from 'react-native-table-component';

export default class BudgetTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['현금', '300,000원'],
      tableData: [
        ['현금','300,000원'],
      ],
      tableHead1: ['은행', '2,000,000원'],
      tableData1: [
        ['하나은행','1,000,000원'],
        ['농협','200,000원'],
        ['제주은행','800,000원']
      ],
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

        <View style={{paddingTop:10}}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#f7ccc5'}}>
          <Row data={state.tableHead1} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData1} textStyle={styles.text}/>
        </Table>
        </View>

        <FAB
          color='#e9664e'
          icon={{ name: 'create', color: "white"}}
          placement="right"
          onPress={()=>navigation.navigate('자산작성')}
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
