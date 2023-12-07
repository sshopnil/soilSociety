import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CropCareScreen from "../CropCareScreen";
import TipsDetails from "../TipsDetails";
import { AddIcon } from "native-base";
import AddTip from "../AddTip";

/*
    flow
        ccHome -> 
        tipsDetails ->
        discsDetails ->
        floatBtn -> 

*/


const stack = createStackNavigator();

const CropCareStack = () =>{
    return(
        <stack.Navigator initialRouteName="ccHome" screenOptions={{headerShown: false}}>
            <stack.Screen name="ccHome" component={CropCareScreen}/>
            <stack.Screen name="tipsDetails" component={TipsDetails}/>
            {/* <stack.Screen name="discsDetails" component={DiscsDetails}/> */}
            <stack.Screen name="addTip" component={AddTip}/>
        </stack.Navigator>
    )
}
export default CropCareStack
/*
home 
    tips, discs
    []
    button
*/