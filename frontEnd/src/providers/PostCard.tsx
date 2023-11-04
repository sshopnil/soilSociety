import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface PostCardProps {
  title: string;
  question: string;
  imageUrl: string;
  navigation: any;
}

// const PostCard: React.FC<PostCardProps> = ({ title, question, imageUrl }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.question}>{question}</Text>
//       </View>
//       <Image source={{ uri: imageUrl }} 
//                 style={styles.image}
//                 onError={(e) => {
//                   <Text>hi</Text>
//                   console.log('Image loading error:', e.nativeEvent.error);
//                 }} />
//     </View>
//   );
// };

const PostCard: React.FC<PostCardProps> = ({ title, question, imageUrl, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('CropPostDetail', { title, question, imageUrl });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.question}>{question}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} 
        onError={(e) => {
                            <Text>hi</Text>
                            console.log('Image loading error:', e.nativeEvent.error);
                          }}/>
    </TouchableOpacity>
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
    borderColor: '#ccc',
  },
  textContainer: {
    flex: 1, // Takes up remaining horizontal space
    padding: 5
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 5
  },
});

export default PostCard;
