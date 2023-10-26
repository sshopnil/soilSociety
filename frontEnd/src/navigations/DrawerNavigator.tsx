import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import ViewCartScreen from '../screens/FreshEats/ViewCartScreen';
import ViewWishListScreen from '../screens/FreshEats/ViewWishListScreen';
import ViewOrderScreen from '../screens/FreshEats/ViewOrderScreen';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: "black",
                drawerActiveTintColor: "white",
            }}
            >
            <Drawer.Screen
                name="posts"
                component={TabNavigation}
                options={{
                    title: 'Soil Society'
                }}
            />

            <Drawer.Screen
                name="cart"
                component={ViewCartScreen}
                options={{
                    title: 'Cart'
                }}
            />

            <Drawer.Screen
                name="wishlist"
                component={ViewWishListScreen}
                options={{
                    title: 'WishList'
                }}
            />
            <Drawer.Screen
                name="orders"
                component={ViewOrderScreen}
                options={{
                    title: 'Orders'
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;