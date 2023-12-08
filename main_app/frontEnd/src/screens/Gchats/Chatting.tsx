import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chatting = ({ route }) => {
  // Extract the item data from the navigation parameters
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.typeText}>Type: {item.type}</Text>
      <Text style={styles.availableText}>
        Available: {item.available ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  typeText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  availableText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Chatting;
