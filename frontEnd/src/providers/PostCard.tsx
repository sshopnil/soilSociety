import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PostCardProps {
  title: string;
  question: string;
  imageUrl: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, question, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.question}>{question}</Text>
      </View>
      <Image source={{ uri: imageUrl }} 
                style={styles.image}
                onError={(e) => {
                    console.log('Image loading error:', e.nativeEvent.error);
                  }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    margin: 9,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  textContainer: {
    flex: 1, // Takes up remaining horizontal space
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default PostCard;
