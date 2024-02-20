import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles'; 
import { useSelector } from 'react-redux';

export default function PurchasesScreen({navigation}) {
  const {payements} = useSelector(state => state.payement);
  const [isItemContainerVisible, setItemContainerVisible] = useState(false);

  return (
    <>
    {
      payements.length>0 ?
      payements.map((payement, index) => (
        <View key={index} style={styles.containerCardInformation}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>{payement.totalAmount.toFixed(2)}€</Text>
            <Text style={styles.dateText}>{payement.date}</Text>
            {isItemContainerVisible ? (
              <Ionicons 
                name="remove-circle-outline" 
                style={{top:0,left:4}} 
                size={24} 
                color="black" 
                onPress={() => setItemContainerVisible(false)} 
              />
            ) : (
              <Ionicons 
                name="add-circle-outline" 
                style={{top:0,left:4}}  
                size={24} 
                color="black" 
                onPress={() => setItemContainerVisible(true)} 
              />
            )}
          </View>
          <View style={styles.coursCardInfo}>
          {isItemContainerVisible && (
            <ScrollView>
              {payement.items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>{item.price.toFixed(2)}€</Text>
                </View>
              ))}
            </ScrollView>
          )}
          </View>
        </View>
      )) :
      (<Text>
        no data
      </Text>)
    }
    </>
  );
}