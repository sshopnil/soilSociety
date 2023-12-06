import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CropCareScreen from "../CropCareScreen";
import TipsDetails from "../TipsDetails";

const stack = createStackNavigator();

const CropCareStack = () =>{
    return(
        <stack.Navigator initialRouteName="ccHome" screenOptions={{headerShown: false}}>
            <stack.Screen name="ccHome" component={CropCareScreen}/>
            <stack.Screen name="tipsDetails" component={TipsDetails}/>
            {/* <stack.Screen name="discsDetails" component={DiscsDetails}/> */}
        </stack.Navigator>
    )
}
/*
home 
    tips, discs
    []
    button
*/