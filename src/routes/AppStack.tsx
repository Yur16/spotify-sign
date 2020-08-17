import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const { Navigator, Screen} = createStackNavigator();

const AppStack: React.FC = () => {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>
        <Screen name="Landing" component={Landing} options={{
          headerShown: false,
        }} />
        <Screen name="SignIn" component={SignIn} options={{
          title: 'create account',
        }}/>
        <Screen name="SignUp" component={SignUp} options={{
          title: 'Log in',
        }}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;