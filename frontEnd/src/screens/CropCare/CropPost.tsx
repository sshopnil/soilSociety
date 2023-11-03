import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CropPostDetailProps {
  route: { params: { title: string; question: string; imageUrl: string } };
}

const CropPostDetail: React.FC<CropPostDetailProps> = ({ route }) => {
  const { title, question, imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  question: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default CropPostDetail;
