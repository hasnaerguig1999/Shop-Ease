import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/globalStyles';
import { useDispatch } from 'react-redux';
import { add } from '../redux/Cart/actions.js';


export default function CourseInfosScreen({ route, navigation }) { 

  const { item } = route.params;
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    dispatch(add(item));

    Alert.alert("Alert", "Ajouté au panier avec succès!", [
      { text: "OK" } 
    ]);
  };

  return (
    <View style={styles.containerInfoScreen}>
      <ScrollView>
        <Image source={{ uri: item.image }} style={styles.imageInfo} />
        <Text style={styles.descriptionInfo}>{item.description}</Text>
      </ScrollView>
      <View style={styles.containerInfo}>
        <Text style={styles.priceInfo}>{item.price}€</Text>
      </View>
      <View style={styles.containerTab}>
        <Button style={styles.buttonInfo} icon="cart" mode="contained" onPress={handleButtonPress} 
        options={({ route, navigation }) => ({
          title: route.params.item.title,
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => (
            <FontAwesome5 
              name="shopping-cart" 
              size={24} 
              style={{marginRight: 20}}
              color="white" 
            />
          ),
        })}
        >
          Add to cart
        </Button>
      </View>
    </View>
  );
}

