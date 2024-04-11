import { Text, SafeAreaView } from 'react-native';
import {styles} from './style';
import React from 'react';
import NavButton from '../../Components/NavButton/index';

const Annotation = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Suas Anotações </Text>
      <NavButton />
    </SafeAreaView>
  );
}

export default Annotation;