import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import CourseInfosScreen from '../screens/CourseInfosScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles'
import PurchasesScreen from '../screens/PurchasesScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {

  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="CourseInfosScreen"
        component={CourseInfosScreen}
        options={({ route, navigation }) => ({
          title: route.params.item.title,
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => (
            <FontAwesome5
              name="shopping-cart"
              size={24}
              style={{ marginRight: 20 }}
              color="white"
              onPress={() => navigation.navigate('CartScreen')}

            />
          ),
        })}
      />
      <Stack.Screen name="PurchasesScreen" component={PurchasesScreen}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="CartScreen" component={CartScreen}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}
      />

    </Stack.Navigator>
  );
}