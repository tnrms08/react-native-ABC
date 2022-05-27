import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import {
  PieChart
} from "react-native-chart-kit";



const StaticScreen = () => {

  const navigation = useNavigation()

  const screenWidth = Dimensions.get("screen").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = [
    {
      name: "식비",
      population: 100000,
      color: "#e9664e",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "인터넷 쇼핑",
      population: 63000,
      color: "#f7ccc5",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "교통비",
      population: 48000,
      color: "#a83b28",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  return (
    <View style={styles.container}>

      <PieChart
        data={data}
        width={screenWidth}
        height={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"30"}
        hasLegend={false}
        center={[75, 0]}
        //absolute
      />

      <View style={{flexDirection:'row'}}>
        <Ionicons name="ellipse" size={20} color="#e9664e" style={{paddingHorizontal:10}}/>
        <Text style={{color:'#7F7F7F'}}>식비 (47%)</Text>
      </View>

      <View style={{flexDirection:'row', paddingLeft:40}}>
        <Ionicons name="ellipse" size={20} color="#f7ccc5" style={{paddingHorizontal:10}}/>
        <Text style={{color:'#7F7F7F'}}>인터넷 쇼핑 (30%)</Text>
      </View>

      <View style={{flexDirection:'row', paddingLeft:10}}>
        <Ionicons name="ellipse" size={20} color="#a83b28" style={{paddingHorizontal:10}}/>
        <Text style={{color:'#7F7F7F'}}>교통비 (23%)</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'white'
  },
  chart: {
    flex: 1
  }
});
export default StaticScreen;