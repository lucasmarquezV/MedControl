import React, { useState } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavButton from '../../Components/NavButton/index';
import LoadingScreen from '../../Components/LoadingScreen/index'; 

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const navigation = useNavigation();

  const Loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Home');
      setIsLoading(false);
    }, 3000); 
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Remedio</Text>
      <View>
        <Ionicons name="person-circle-outline" size={150} color="black" />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Login: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(login) => setLogin(login)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Senha: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(senha) => setPassword(senha)}
        />
      </View>
      <Pressable style={styles.button} onPress={Loading}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.text} onPress={goToRegister}>
        <Text style={styles.text}>Não possui cadastro? faça aqui</Text>
      </Pressable>
      <NavButton />
      {isLoading && <LoadingScreen />}
    </View>
  );
};

export default Login;
