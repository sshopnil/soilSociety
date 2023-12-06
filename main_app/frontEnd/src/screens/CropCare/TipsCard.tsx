import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface propTypes {
  TipsData: Array<Object>
}

const TipsCard: React.FC<propTypes> = ({ TipsData }) => {
  // const { postId, postTitle, postDetail, imgUrl } = TipsData;

  return (
    <View style={styles.container}>
      <Image source={{ uri: TipsData.imgURL }} style={styles.image} />
      <Text style={styles.title}>{TipsData.tipTitle}</Text>
      <Text style={styles.question}>{TipsData.tipDetail}</Text>
    </View>
  );
};

export default TipsCard;

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