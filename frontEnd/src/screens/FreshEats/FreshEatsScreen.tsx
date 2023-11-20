import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import SearchBar from "./components/SearchBar";
import ResultDetail from "./components/ResultDetail";
import ResultsList from "./components/ResultsList";



const results = [
    {"prod_id" : 1, "name": "Item name 1","img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {"prod_id" : 2, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {"prod_id" : 3, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'}
];


const FreshEatsScreen = () => {

    const [term, seTerm] = useState('');

    return (
        <View style={{backgroundColor: 'black', height: "100%"}}>
            <Text style={styles.titleStyle}>FreshEats</Text>
            <View style={styles.viewStyle}>
                <SearchBar term={term} onTermChange={seTerm} />
                <ScrollView style={{marginBottom: 150}}>
                <ResultsList 
                    results={results} 
                    title="Poultry" 
                />
                <ResultsList 
                    results={results} 
                    title="Dairy" 
                />
                <ResultsList 
                    results={results} 
                    title="Foods and vegetables" 
                />
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        paddingTop: 48,
        backgroundColor: '#1B1B1B',
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20,
        paddingVertical: 20
    },
    viewStyle:{
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height:'100%'
    }
});

export default FreshEatsScreen;