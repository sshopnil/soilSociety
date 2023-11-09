import React, {useState} from 'react';
import { View,Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView   } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';


const LocalChats =()=> {

    const [userName, setUserName] = useState('');
    const [nationality , setNationality] = useState('');

    

    return (
        <View>
            <TextInput
                style={{
                    backgroundColor: '#FEFEFE',
                    padding: 10,
                    paddingLeft: 20,
                    height: 50,
                    borderRadius: 20,
                    marginTop: 35,
                    marginLeft: 15,
                    marginRight: 15,
                }}
                value={userName}
                onChangeText={setUserName}
                placeholder="Search For Local Chats..."
            />

            <Text>
                asdfadf
            </Text>
        </View>
    );
}

export default LocalChats;