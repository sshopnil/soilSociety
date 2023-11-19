import React from 'react';
import { StyleSheet, View, Text, Image, ImageSourcePropType } from 'react-native';

interface UsersProps {
  imageUri: ImageSourcePropType; // Use the correct type for your image source
  name: string; // Assuming name is a string
}

const Users: React.FC<UsersProps> = ({ imageUri, name }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={imageUri}
        style={styles.roundImage}
      />
      <Text style={styles.centeredText } >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 20,
    alignItems: 'center',
  },
  roundImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  centeredText: {
    textAlign: 'center',
    flexGrow: 1,
  },
});

export default Users;
