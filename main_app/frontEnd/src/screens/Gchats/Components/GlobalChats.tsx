import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl } from 'react-native';
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
        data={data}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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

export default GlobalChats;
