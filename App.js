import 'react-native-gesture-handler'
import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import home from './src/pages/homePages/home.js'
import profile from './src/pages/profileDetail/profileDetail.js'


const Stack = createStackNavigator();

// or any files within the Snack
import AssetExample from './src/components/AssetExample';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="ProfileDetail" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
