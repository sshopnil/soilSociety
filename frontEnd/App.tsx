import React from 'react';
import { StyleSheet} from 'react-native';
import TabNavigation from './src/navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = ()=>{

  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
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


export default App;