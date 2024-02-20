import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { styles } from '../styles/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { clear,remove } from '../redux/Cart/actions.js'; 
import { addPayement } from '../redux/payement/actions.js';

export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch(); 


    const handlePayment = () => {
      dispatch(addPayement(cartItems)); 
      dispatch(clear());
  };


  return (
    <View style={styles.containerCardPrice}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.totalContainerCard}>
            <Text style={styles.totalTextCard}>{item.title}</Text>
            <Text style={styles.priceTextCart}>{item.price}€</Text>
            <MaterialCommunityIcons name='delete' size={24} color={'green'} style={styles.deleteIcon} onPress={() => handleRemove(item)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.itemContainerCard}>
        <Text style={styles.itemPriceCard}>Total : {totalAmount.toFixed(2)}€</Text>
        <Button style={styles.buttonPrice} textColor='black' onPress={handlePayment}>Payer</Button>
      </View>
    </View>
  );
}