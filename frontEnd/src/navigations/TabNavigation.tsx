import React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FreshEatsScreen from '../screens/FreshEats/FreshEatsScreen';
import CropCareScreen from '../screens/CropCare/CropCareScreen';
import PostScreen from '../screens/Posts/PostScreen';
import GchatsScreen from '../screens/Gchats/GchatsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import UserInfo from '../screens/profile/UserInfo';
import ViewCartScreen from '../screens/FreshEats/ViewCartScreen';
import { Zocial } from '@expo/vector-icons';
import DrawerNavigator from './DrawerNavigator';

const tabs = createBottomTabNavigator();

const TabNavigation = ()=>{

  return (
      <tabs.Navigator 
        initialRouteName="Posts"
        screenOptions={{
          tabBarStyle:{backgroundColor: "#1B1B1B", alignItems: 'center', borderTopWidth: 0}, 
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E0FFB4',
          tabBarInactiveTintColor: "grey",
          title:"Soil Society",
          headerPressOpacity: 5,
          headerShown: false
        }}
      >
        <tabs.Screen 
          name="Posts" 
          component={PostScreen}
          options={{
            tabBarLabel:"Post",
            tabBarIcon: ({focused})=> <MaterialCommunityIcons name={focused ? "post": "post-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
          
        />
        <tabs.Screen
            name="Crop Care" 
            component={CropCareScreen}
            options={{
              tabBarIcon: ({focused})=> <Ionicons name={focused ? "leaf": "leaf-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
              tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
              tabBarActiveTintColor: "#E0FFB4"
            }}
        />
        <tabs.Screen 
          name="Fresh Eats" 
          component={FreshEatsScreen}
          options={{
            tabBarIcon: ({focused})=> <MaterialCommunityIcons name={focused ? "cart": "cart-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
        />
        <tabs.Screen 
          name="GChats" 
          component={GchatsScreen}
          options={{
            tabBarIcon: ({focused})=> <MaterialCommunityIcons name={focused ? "chat": "chat-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
        />
        <tabs.Screen 
          name="userinfo" 
          component={UserInfo}
          options={{
            tabBarIcon: ({focused})=> <Ionicons name={focused ? "person": "person-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
        />
      </tabs.Navigator>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle:{
    backgroundColor:"black"
  }
});


export default TabNavigation;