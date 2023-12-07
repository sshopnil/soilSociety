import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute} from "@react-navigation/native";
import ResultCard from "./ResultCard";


interface propTypes{
    title : string,
    results: Array<Object>
};


const ResultsList : React.FC<propTypes> = ({results, title}) =>{
    const navigation = useNavigation();
    if(results.length == 0)
    {
        return null;
    }

    const [refresh, setRefresh] = useState();
    const navi = useRoute();
    useEffect(()=>{
        setRefresh(navi?.params);
    }, [])
    // console.log(results);
    return(
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            {results&&<FlatList
                extraData={false}
                horizontal={true}
                data = {results}
                keyExtractor={(res)=> res.prod_id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('product-details', {id: item.prod_id})}>
                            <ResultCard results={item}/>
                        </TouchableOpacity>
                    );
                }}
                style={styles.listStyle}
                showsHorizontalScrollIndicator = {false}
            />}
        </View>
    );
};


const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10
    },

    listStyle:{
        paddingVertical: 15
    }
});

export default ResultsList;