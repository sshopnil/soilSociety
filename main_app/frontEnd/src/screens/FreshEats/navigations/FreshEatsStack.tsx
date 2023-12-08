import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FreshEatsScreen from "../FreshEatsScreen";
import ResultDetails from "../ResultDetails";
import OrderItem from "../OrderItem";
import SuccessOrderScrn from "../SuccessOrderScrn";




const stack = createStackNavigator();


const FreshEatsStack = ()=>{
    return (
        <stack.Navigator initialRouteName="fhome" screenOptions={{headerShown: false}}>
            <stack.Screen name="fhome" component={FreshEatsScreen}/>
            <stack.Screen name='product-details' component={ResultDetails}/>
            <stack.Screen name='order-item' component={OrderItem}/>
            <stack.Screen name='order-success' component={SuccessOrderScrn}/>
        </stack.Navigator>
    );
}

export default FreshEatsStack;