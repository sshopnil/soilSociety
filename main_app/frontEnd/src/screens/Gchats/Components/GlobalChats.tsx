import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const GlobalChats = () => {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handleSendMessage = () => {
    
    console.log('Sending message:', inputText);// logic to send msg

    
    setInputText('');
  };

  const getAPIData = async () => {
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

  const handleRefresh = () => {
    setRefreshing(true);
    getAPIData();
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.loadingText}
        overlayColor="rgba(0, 0, 0, 0.6)"
      />
      <FlatList
        style={styles.flatList}
        data={data.slice(0,20).reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
        )}
        onEndReached={handleRefresh}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#1B1B1B',
  },
  flatList: {
    flex: 1,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    backgroundColor: '#1B1B1B',
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginLeft: 12,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#64ABBC',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 12,
  },
  sendButtonText: {
    color: '#FEFEFE',
    fontWeight: '700',
  },
});

export default GlobalChats;
