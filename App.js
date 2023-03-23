import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
