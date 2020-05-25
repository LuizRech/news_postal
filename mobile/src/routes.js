import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Details from './pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Home',
                    headerTitleStyle: {
                        color: 'white',
                        fontFamily: 'sans-serif'
                    },
                    headerStyle: {
                        backgroundColor: 'rgb(34, 32, 30)'
                    }
                }}    
            />
    
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: 'Detalhe da Notícia',
                    headerTitleStyle: {
                        fontFamily: 'sans-serif'
                    },
                    headerStyle: {
                        backgroundColor: 'rgb(34, 32, 30)'
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;