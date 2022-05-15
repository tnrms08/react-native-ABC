import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import TopTab from "./TopTab";
import AddScreen from "./screens/AddScreen";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator>
            <Nav.Screen options={{headerShown: false}} name="Stack" component={Stack} />
            <Nav.Screen options={{headerShown: false}} name="TopTab" component={TopTab}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="내역추가" component={AddScreen}/>
        </Nav.Navigator>
    );
};

export default Root;