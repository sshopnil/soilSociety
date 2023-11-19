import React, {useState} from 'react';
import { View,Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView   } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import LocalChats from './Components/LocalChats'
import OnlineUsersList from './Components/OnlineUsersList';
import GlobalChats from './Components/GlobalChats';



const GchatsScreen = () =>{

    const [selectedButton, setSelectedButton] = useState(1);

    

    const handleButtonPress = (buttonId: any) => {
        setSelectedButton(buttonId);
    };

    const onlineUsers = ['User1', 'User2', 'User3', /* ... */];

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#1B1B1B", justifyContent: 'flex-start', paddingTop: 48, }}>
            <Text style={{
                    color: "#D8E9A8",
                    fontSize: 30,
                    fontStyle: "normal",
                    fontWeight: "700",
                    paddingLeft: 20
                    }}>
                    GreenChats
            </Text>


            <View style={{
                backgroundColor: "#FEFEFE", 
                height: 145,
                marginTop: 15,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: 20,
                overflow: 'hidden',
            }}>

                <OnlineUsersList/>
                

                <View style={{
                    backgroundColor: "#D8E9A8",
                    height: 46,
                    flexShrink: 0,
                    marginBottom:8,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 20,
                    paddingTop:3,
                    
                }}>
                    <ScrollView
                        horizontal={true} 
                        scrollEventThrottle={16}
                        style={{
                            paddingLeft: 13, 
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => handleButtonPress(1)}
                            style={{
                                backgroundColor: selectedButton === 1 ? '#64ABBC' : '#D8E9A8', 
                                borderRadius: 20,
                                height: 40,
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: 8
                            }}
                        >
                            <Text style={{
                                color: selectedButton === 1 ? '#FEFEFE' : '#1B1B1B',
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}> Global </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleButtonPress(2)}
                            style={{
                                backgroundColor: selectedButton === 2 ? '#64ABBC' : '#D8E9A8', 
                                borderRadius: 20,
                                height: 40,
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: 8
                            }}
                        >
                            <Text style={{
                                color: selectedButton === 2 ? '#FEFEFE' : '#1B1B1B',
                                textAlign: 'center',
                                textAlignVertical: 'center',

                            }}> Local </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleButtonPress(3)}
                            style={{
                                backgroundColor: selectedButton === 3 ? '#64ABBC' : '#D8E9A8', 
                                borderRadius: 20,
                                height: 40,
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: 8
                            }}
                        >
                            <Text style={{
                                color: selectedButton === 3 ? '#FEFEFE' : '#1B1B1B',
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}> Experts </Text>
                        </TouchableOpacity>

                    </ScrollView>

                </View>
            </View>

            {selectedButton === 1 && <GlobalChats/>}
            {selectedButton === 2 && <LocalChats/>}
            
        </SafeAreaView>
    );


    
}

function ChatsPAge() {


}


export default GchatsScreen;