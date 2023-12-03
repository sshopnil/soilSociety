import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GchatsScreen from "../GchatsScreen";
import Chatting from "../Chatting";




const stack = createStackNavigator();


const GChatsStack = ()=>{
    return (
        <stack.Navigator initialRouteName="GchatsScreen" screenOptions={{headerShown: false}}>
            <stack.Screen name="GchatsScreen" component={GchatsScreen}/>
            <stack.Screen name="Chatting" component={Chatting}/>
        </stack.Navigator>
    );
}

export default GChatsStack;