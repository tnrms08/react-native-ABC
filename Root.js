import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import TopTab from "./TopTab";
import AddScreen from "./screens/AddScreen";
import BudgetAddScreen from "./screens/BudgetAddScreen";
import AssetAddScreen from "./screens/bottomTab/AssetAddScreen";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator>
            <Nav.Screen options={{headerShown: false}} name="Stack" component={Stack} />
            <Nav.Screen options={{headerShown: false}} name="TopTab" component={TopTab}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="내역추가" component={AddScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="예산작성" component={BudgetAddScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="자산작성" component={AssetAddScreen}/>
        </Nav.Navigator>
    );
};

export default Root;