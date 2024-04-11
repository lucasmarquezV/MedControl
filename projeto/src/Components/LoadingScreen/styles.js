import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB7093', // Cor rosa
    opacity: 0.5, 
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
    marginTop: 0,
  },
   overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Para garantir que o componente de carregamento fique em cima de tudo
  },
});
export {styles}