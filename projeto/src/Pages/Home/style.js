import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    
  },
  title: {
    fontSize: 32,
    marginBottom: 15
  },
  button: {
    backgroundColor: 'pink',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2
  },
  buttonText:{
    fontSize: 20,
  },
  input: {
    flexDirection: 'row',
    margin: 10
  },
  textInput:{
    height: 40,
    width: '50%',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
  },
  text:{
    fontSize: 22
  },
  scrollViewContainer: {
    flex: 1,
    width: 300,
    maxHeight: 300, // Limite a altura do ScrollView conforme necessário
    marginBottom: 10, // Deixe espaço para o botão de navegação
  },


  
})

export {styles}