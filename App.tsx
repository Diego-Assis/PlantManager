import React from 'react';
import {
  Text,
  View
} from "react-native";
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';
import { PlantSelect } from './src/pages/PlantSelect';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentification} />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation} />
        <Stack.Screen
          name="PlantSelect"
          component={PlantSelect} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}