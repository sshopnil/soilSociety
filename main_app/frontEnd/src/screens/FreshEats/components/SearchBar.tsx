import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons';

interface searchBarProps {
    term: string,
    onTermChange: (sendToParent: string)=> void
}

const SearchBar : React.FC<searchBarProps>= ({term, onTermChange}) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                placeholderTextColor={"#E0FFB4"}
                style={styles.inputStyle}
                value= {term}
                onChangeText={onTermChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginVertical: 20,
        height: 50,
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: "black",
        color: "#E0FFB4"
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
        color: "#E0FFB4"
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        color: "#E0FFB4",
        marginHorizontal: 10
    }
});

export default SearchBar;