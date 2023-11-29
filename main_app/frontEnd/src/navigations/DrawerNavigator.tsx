import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import ViewCartScreen from '../screens/FreshEats/ViewCartScreen';
import ViewWishListScreen from '../screens/FreshEats/ViewWishListScreen';
import ViewOrderScreen from '../screens/FreshEats/ViewOrderScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: "black",
                drawerActiveTintColor: "white",
                headerShown: false,
                drawerType: "slide",
                swipeEdgeWidth: 80
                  
            }}
            >
            <Drawer.Screen
                name="Soil Society"
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />

            <Drawer.Screen
                name="cart"
                component={ViewCartScreen}
                options={{
                    title: 'Cart',
                    drawerIcon: ({focused})=> <MaterialCommunityIcons name="cart-outline" size={24} color={focused ? "white": "black"} />
                }}
            />

            <Drawer.Screen
                name="wishlist"
                component={ViewWishListScreen}
                options={{
                    title: 'WishList',
                    drawerIcon: ({focused})=> <Ionicons name="eye-outline" size={24} color={focused? "white": "black"} />
                }}
            />
            <Drawer.Screen
                name="orders"
                component={ViewOrderScreen}
                options={{
                    title: 'Orders',
                    drawerIcon: ({focused})=> <Ionicons name="ios-list-outline" size={24} color={focused ? "white": "black"} />
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;