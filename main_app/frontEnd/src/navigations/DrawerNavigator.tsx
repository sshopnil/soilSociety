import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import ViewCartScreen from '../screens/FreshEats/cow/ViewCartScreen';
import ViewWishListScreen from '../screens/FreshEats/cow/ViewWishListScreen';
import ViewOrderScreen from '../screens/FreshEats/cow/ViewOrderScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BSellerScreen from '../screens/FreshEats/sellerEnd/BSellerScreen';
import SellerSection from '../screens/FreshEats/sellerEnd/SellerSection';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../common/AuthContext';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

    const {isSeller} = useAuth();

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
            
            {!isSeller && <Drawer.Screen
                name="bseller"
                component={BSellerScreen}
                options={{
                    title: 'Become a seller',
                    drawerIcon: ({focused})=> <Ionicons name="man-outline" size={24} color={focused ? "white": "black"} />
                }}
            />}
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
            {isSeller && <Drawer.Screen
                name="seller-section"
                component={SellerSection}
                options={{
                    title: 'Seller section',
                    drawerIcon: ({focused})=> <Feather name="command" size={24} color={focused ? "white": "black"} />
                }}
            />}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;