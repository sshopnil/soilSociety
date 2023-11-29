import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';

interface tableItems{
    data : Array<{name: any, qty:any, price: any}>[];
};



const DataTableComponent: React.FC<tableItems> = ({data}) => {
    return (
        <DataTable style={{backgroundColor: '#f8f8f8'}}>
            <DataTable.Header style={styles.head}>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize:16}}>Items</DataTable.Title>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize:16}}>Qty</DataTable.Title>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize: 16}}>Price</DataTable.Title>
            </DataTable.Header>

            {
                data.map((item, key)=>
                    <DataTable.Row key={key}> 
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell>{item.qty}</DataTable.Cell>
                        <DataTable.Cell>{item.price * item.qty}৳</DataTable.Cell>
                    </DataTable.Row>
                )
            }
        </DataTable>
    );
};

const styles = StyleSheet.create({
    head: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: 50,
        backgroundColor: '#D8E9A8',
    },
});

export default DataTableComponent;