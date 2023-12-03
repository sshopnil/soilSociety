import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Chatting from '../Chatting';


interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const fetchDataFromApi = async (setData: React.Dispatch<React.SetStateAction<Book[]>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setRefreshing: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const url = 'https://simple-books-api.glitch.me/books';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result: Book[] = await response.json();
    setData(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

const LocalChats = () => {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [userName, setUserName] = useState('');
  const [filteredData, setFilteredData] = useState<Book[]>([]);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchDataFromApi(setData, setLoading, setRefreshing);
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(userName.toLowerCase())
    );
    //filtered data by name
    const sortedData = filtered.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sortedData);
  }, [userName, data]);

  const handleItemPress = (item: Book) => {
    // Navigate to the Chatting screen
    navigation.navigate('Chatting', { item } as { item: Book });
  };

  return (
    <>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.loadingText}
        overlayColor="rgba(0, 0, 0, 0.6)"
      />
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Search For Local Chats..."
      />
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={filteredData.slice(0, 20).reverse()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View style={styles.itemContainer}>
                <View style={styles.rowContainer}>
                  <Image
                    source={require('../../../../assets/post-card-images/sample-crop.jpg')}
                    style={styles.roundImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.availableText}>
                      Available: {item.available ? 'Yes' : 'No'}{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#FEFEFE',
    padding: 10,
    paddingLeft: 20,
    height: 50,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  flatList: {
    marginTop: 10,
  },
  itemContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    marginBottom: 10,
  },
  nameText: {
    color: '#FEFEFE',
    fontSize: 14,
    fontWeight: '700',
  },
  roundImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  availableText: {
    color: 'rgba(254, 254, 254, 0.60)',
    fontSize: 14,
    fontWeight: '700',
  },
  loadingText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LocalChats;
