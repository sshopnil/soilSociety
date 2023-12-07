import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';

interface tableItems{
    data : Array<{id: any, price: any, delDate_start: any, delDate_end: any}>[];
    orderID: ()=> any;
};



const OrderTable: React.FC<tableItems> = ({data, setOrderID}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return (
        <DataTable style={{backgroundColor: '#f8f8f8', padding:10}}>
            <DataTable.Header style={styles.head}>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize:16, color: '#f8f8f8'}}>OrderID</DataTable.Title>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize: 16, color: '#f8f8f8'}}>Price</DataTable.Title>
                <DataTable.Title textStyle={{fontWeight: 'bold', fontSize: 16, color: '#f8f8f8'}}>Del. Date</DataTable.Title>
            </DataTable.Header>

            {
                data?.map((item, key)=>
                        <DataTable.Row key={item.id} onPress={()=> setOrderID(item)}> 
                        <DataTable.Cell>{item.id}</DataTable.Cell>
                        <DataTable.Cell>{item.price}৳</DataTable.Cell>
                        <DataTable.Cell>
                            {item.delDate_start.split('-')[0] + ' - '}
                            {item.delDate_end.split('-')[0]}{' ' + months[item.delDate_end.split('-')[1]-1]} 

                            </DataTable.Cell>
                        </DataTable.Row>
                )
            }
        </DataTable>
    );
};

const styles = StyleSheet.create({
    head: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50,
        backgroundColor: '#1B1B1B',
    },
});

export default OrderTable;