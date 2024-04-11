import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles'

const LoadingScreen = () => {
  return (
    <View style={[styles.container, styles.overlay]}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};

export default LoadingScreen;