import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CardItem} from './src/components/Carditem';
import IconHeart from './assets/icons/IconHeart';
import IconSearch from './assets/icons/IconSearch';

const pizzaData = [
  {
    id: 1,
    name: 'Діабло',
    price: 25,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/0490a9acbf184634b155aa839faa13d4_366x366.jpeg',
  },
  {
    id: 2,
    name: 'Маргарита',
    price: 26,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg',
  },

  {
    id: 3,
    name: 'Діабло2',
    price: 27,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/0490a9acbf184634b155aa839faa13d4_366x366.jpeg',
  },
  {
    id: 4,
    name: 'Маргарита2',
    price: 28,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg',
  },
  {
    id: 5,
    name: 'Діабло3',
    price: 27,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/0490a9acbf184634b155aa839faa13d4_366x366.jpeg',
  },
  {
    id: 6,
    name: 'Маргарита3',
    price: 28,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg',
  },
  {
    id: 7,
    name: 'Діабло4',
    price: 27,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/0490a9acbf184634b155aa839faa13d4_366x366.jpeg',
  },
  {
    id: 8,
    name: 'Маргарита4',
    price: 28,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg',
  },
  {
    id: 9,
    name: 'Діабло5',
    price: 27,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/0490a9acbf184634b155aa839faa13d4_366x366.jpeg',
  },
  {
    id: 10,
    name: 'Маргарита6',
    price: 28,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg',
  },
];
const SectionPisa = () => {
  const [product, setProduct] = useState('');
  const [text, setText] = useState('');
  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Магазин піц "Roma"</Text>
        <Text style={styles.textDes}>
          Якийсь опис {'\n'}довжиною в 2-а рядки
        </Text>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            // onChangeText={(event) => console.log(event)}
            onChangeText={event => setProduct(event)}
            value={product}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setText(product)}>
            <IconSearch
              colorFill={'red'}
              colorStroke={'red'}
              width={'80'}
              height={'80'}
            />
            {/* <IconSearch /> */}
          </TouchableOpacity>
        </View>
        {text !== '' && <Text style={{marginTop: 0}}>... пошук по {text}</Text>}
        <View style={styles.imgContainer}>
          {pizzaData.map((pizza, index) => (
            <CardItem key={index} pizza={pizza} />
          ))}
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.buttonText}>Замовити</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    ...Platform.select({
      ios: {backgroundColor: 'red'},
      // android: {backgroundColor: 'green'},
      android: {backgroundColor: '#FFF'},
      default: {backgroundColor: 'blue'}, // other platforms, web for example
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'red',
  },
  textDes: {
    marginTop: 15,
    fontSize: 16,
    color: 'red',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: '50%',
    height: 180,
    borderRadius: 4,
  },
  orderButton: {
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'orange',
  },
  iconContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 15,
  },
});

export default SectionPisa;
