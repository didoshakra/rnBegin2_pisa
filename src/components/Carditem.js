import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, Alert} from 'react-native';

// export const CardItem = ({text, img, price}) => {
export const CardItem = ({pizza}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Ви вибрали', text)}
      style={styles.btn}>
      <Image style={styles.image} source={{uri: pizza.image}} />
      <Text>{pizza.name}</Text>
      <Text>{pizza.price} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '50%',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 4,
  },
});
