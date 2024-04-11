import Login from './src/Pages/Login/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Pages/Home/index';
import AddMed from './src/Pages/AddMed/index';
import Med from './src/Pages/Med/index';
import Annotation from './src/Pages/Annotation/index';
import Register from './src/Pages/Register/index';
import ViewMed from './src/Pages/ViewMed/Index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="AddMed" component={AddMed} options={{headerShown: false}} />
        <Stack.Screen name="Med" component={Med} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="ViewMed" component={ViewMed} options={{headerShown: false}} />
        <Stack.Screen name="Annotation" component={Annotation} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}


