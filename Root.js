import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import TopTab from "./TopTab";
import AddScreen from "./screens/AddScreen";
import BudgetAddScreen from "./screens/topTab/BudgetAddScreen";
import AssetAddScreen from "./screens/bottomTab/AssetAddScreen";
import IncomeItemSetting from "./screens/settingScreen/IncomeItemSetting";
import ExpenseItemSetting from "./screens/settingScreen/ExpenseItemSetting";
import Logout from "./screens/settingScreen/Logout";
import AccountDelete from "./screens/settingScreen/AccountDelete";
import BudgetAlarm from "./screens/settingScreen/BudgetAlarm";
import Alarm from "./screens/settingScreen/Alarm";
import LoginScreen from "./screens/LoginScreen";
import MessageScreen from "./screens/bottomTab/MessageScreen";
import SettingTab from "./screens/bottomTab/SettingTab";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator>
            <Nav.Screen options={{headerShown: false}} name="Stack" component={Stack} />
            <Nav.Screen options={{headerShown: false}} name="TopTab" component={TopTab}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="내역추가" component={AddScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="예산작성" component={BudgetAddScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="자산작성" component={AssetAddScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="수입분류 관리" component={IncomeItemSetting}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="지출분류 관리" component={ExpenseItemSetting}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="로그아웃" component={Logout}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="계정삭제" component={AccountDelete}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="예산알람" component={BudgetAlarm}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="가계부 작성 알람" component={Alarm}/>
            <Nav.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Nav.Screen options={{headerTitle:"이전"}} name="메시지"  component={MessageScreen}/>
            <Nav.Screen options={{headerTitle:"이전"}} name="계정정보"  component={SettingTab}/>


        </Nav.Navigator>
    );
};

export default Root;