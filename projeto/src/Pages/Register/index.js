import React from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import NavButton from '../../Components/NavButton/index'; 

const Register = () => {
  const navigation = useNavigation();

  const confirm = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
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
      <Pressable style={styles.button} onPress={confirm}>
        <Text style={styles.buttonText}>Registrar</Text>
      </Pressable>
      <NavButton />
    </View>
  );
};

export default Register;
