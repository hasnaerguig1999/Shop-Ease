import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons ,FontAwesome5} from '@expo/vector-icons';
import Panier from '../screens/CartScreen';
import Achat from '../screens/PurchasesScreen';
import Landing from '../screens/LandingScreen';
import Workshop from '../screens/Workshop';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <FontAwesome5
            name="shopping-cart"
            size={24}
            style={{ marginRight: 20 }}
            color="white"
            onPress={() => navigation.navigate('CartScreen')}

          />
        ),
      
      }}
    >
      <Drawer.Screen
        name="Catalogue"
        component={Landing}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" color={'black'} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Panier"
        component={Panier}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" color={'black'} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Achat"
        component={Achat}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="payment" color={'black'} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Workshop"
        component={Workshop}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="play-for-work" size={24} color="black" />),
        }}
      />
    </Drawer.Navigator>
  );
}