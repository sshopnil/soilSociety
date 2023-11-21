import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native';
import SearchBar from "./components/SearchBar";
import ResultDetail from "./components/ResultDetail";
import ResultsList from "./components/ResultsList";



const results = [
    {"prod_id" : 1, "rem_item": 50, "rating": 4.9, "name": "Item name 1","img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {"prod_id" : 2,"rem_item": 48,  "rating": 4.5, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {"prod_id" : 3, "rem_item": 88, "rating": 3.9, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600'}
];


const FreshEatsScreen = () => {

    const [term, seTerm] = useState('');

    return (
        <View style={{backgroundColor: '#1B1B1B', height: "100%"}}>
            <Text style={styles.titleStyle}>FreshEats</Text>
            <View style={styles.viewStyle}>
                <SearchBar term={term} onTermChange={seTerm} />
                <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        paddingTop: 42,
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
        height:'100%',
        marginHorizontal: 5
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 100
      },
      scrollView: {
        marginHorizontal: 20,
      },
});

export default FreshEatsScreen;