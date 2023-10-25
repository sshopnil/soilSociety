import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import ViewCartScreen from '../screens/FreshEats/ViewCartScreen';
import ViewWishListScreen from '../screens/FreshEats/ViewWishListScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "black",
                drawerActiveTintColor: "white"
            }}
            >
            <Drawer.Screen
                name="posts"
                component={TabNavigation}
                options={{
                    title: 'posts'
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
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;