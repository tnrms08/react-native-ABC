import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { Table, Row, Rows } from 'react-native-table-component';


  export default class MonthTab extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['수입 \n +400,000', '수출\n-200,000', '합계\n+200,000'],
        tableData: [
          ['12월','',''],
          ['11월','',''],
          ['10월','',''],
          ['9월','',''],
          ['8월','',''],
          ['7월','',''],
          ['6월','',''],
          ['5월', '+200,000', '-100,000'],
          ['4월', '+100,000', '-50,000'],
          ['3월', '+100,000', '-50,000'],
          ['2월','',''],
          ['1월','','']
        ]
      }
    }
  
    render() {
      const state = this.state;
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#f7ccc5'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {textAlign:'center', height: 50, backgroundColor: '#f7ccc5' },
    text: { margin: 6 }
  });
