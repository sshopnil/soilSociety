import React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FreshEatsScreen from '../screens/FreshEatsScreen';
import CropCareScreen from '../screens/CropCareScreen';
import PostScreen from '../screens/PostScreen';
import GchatsScreen from '../screens/GchatsScreen';



const tabs = createBottomTabNavigator();

const TabNavigation = ()=>{

  return (
      <tabs.Navigator>
        <tabs.Screen name="Posts" component={PostScreen}/>
        <tabs.Screen name="Crop Care" component={CropCareScreen}/>
        <tabs.Screen name="Fresh Eats" component={FreshEatsScreen}/>
        <tabs.Screen name="GChats" component={GchatsScreen}/>
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
});


export default TabNavigation;