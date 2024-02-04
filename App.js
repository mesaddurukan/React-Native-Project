import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './src/Pages/Welcome';
import MemberSing from './src/Pages/MemberSing';
import SingUp from './src/Pages/SingUp';
import AddCar from './src/Pages/AddCar';
import Randevu from './src/Pages/Randevu';
import InfoCar from './src/Pages/InfoCar';
import MemberResult from './src/Pages/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSing} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
        <Stack.Screen name="SingUpScreen" component={SingUp} />
        <Stack.Screen name="AddCarScreen" component={AddCar} />
        <Stack.Screen name="RandevuScreen" component={Randevu} />
        <Stack.Screen name="InfoCarScreen" component={InfoCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
