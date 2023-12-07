import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PendingOrder from "../sellerEnd/PendingOrder";
import PostItem from "../sellerEnd/PostItem";
import MyItems from "../sellerEnd/MyItems";
import ItemEdit from "../sellerEnd/ItemEdit";



const stack = createStackNavigator();


const SellerStack = ()=>{
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name='pending-order' component={PendingOrder}/>
            <stack.Screen name='post-item' component={PostItem}/>
            <stack.Screen name='my-items' component={MyItems}/>
            <stack.Screen name='edit-item' component={ItemEdit}/>
        </stack.Navigator>
    );
}

export default SellerStack;