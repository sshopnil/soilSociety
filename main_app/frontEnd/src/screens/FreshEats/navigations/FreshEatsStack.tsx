import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FreshEatsScreen from "../FreshEatsScreen";
import ResultDetails from "../ResultDetails";


const stack = createStackNavigator();


const FreshEatsStack = ()=>{
    return (
        <stack.Navigator initialRouteName="fhome" screenOptions={{headerShown: false}}>
            <stack.Screen name="fhome" component={FreshEatsScreen}/>
            <stack.Screen name='product-details' component={ResultDetails}/>
        </stack.Navigator>
    );
}

export default FreshEatsStack;