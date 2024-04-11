import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9', // Cor de fundo mais clara
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor de texto mais escura
  },
  button: {
    backgroundColor: '#ff6f61', // Cor de botão mais vibrante
    width: '60%',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 25, // Borda arredondada
    marginTop: 20, // Espaçamento superior maior
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', // Texto em negrito
    color: 'white', // Cor de texto branca
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, // Espaçamento vertical entre os inputs
    width: '60%', // Definindo a largura para os inputs
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc', // Cor da borda cinza claro
    fontSize: 16,
    borderRadius: 8, // Borda arredondada
    paddingHorizontal: 10, // Preenchimento horizontal interno
  },
  text: {
    fontSize: 18,
    color: '#555', // Cor de texto um pouco mais escura
    marginRight: 10, // Espaçamento direito entre o texto e o input
  },
});

export { styles };
