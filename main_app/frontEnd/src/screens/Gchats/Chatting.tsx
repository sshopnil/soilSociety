import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Chatting = ({ route }) => {
  const { item } = route.params;
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSendMessage = () => {
    // Logic to send the message
    setMessages([...messages, { id: messages.length + 1, text: inputText }]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.availableText}>
            Available: {item.available ? 'Yes' : 'No'}
          </Text>
        </View>
        <Image
          source={require('../../../assets/post-card-images/sample-crop.jpg')}
          style={styles.roundImage}
        />
      </View>

      {/* FlatList for Messages */}
      <FlatList
        style={styles.flatList}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Image
                source={require('../../../assets/post-card-images/sample-crop.jpg')}
                style={styles.roundImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            </View>
          </View>
        )}
      />

      {/* Input Container */}
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
  itemContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    marginBottom: 10,
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
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#1B1B1B',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  nameText: {
    color: '#D8E9A8',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  availableText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: '500',
  },
  roundImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginLeft: 10,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  messageContainer: {
    backgroundColor: '#FEFEFE',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
  },
  messageText: {
    color: '#FEFEFE',
    fontSize: 14,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    backgroundColor: '#1B1B1B',
    marginHorizontal: 10,
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

export default Chatting;
