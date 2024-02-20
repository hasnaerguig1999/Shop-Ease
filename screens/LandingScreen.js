import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { data } from '../data/testData';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/Cart/actions.js'; 

export default function Landing({ navigation }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {data && data.map((item) => {
          const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

          if (isInCart) {
            return null;
          }

          return (
            <View key={item.id} style={styles.courseContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseInfosScreen', { item: item })}>
                  <Fontisto name="eye" size={24} color="green" style={{marginLeft:20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAddToCart(item)}>
                  <MaterialIcons name="shopping-basket" size={24} color="green" style={{ marginRight:20}} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}