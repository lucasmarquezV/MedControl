import { Text, View, SafeAreaView } from 'react-native';
import {styles} from './style';
import NavButton from '../../Components/NavButton/index';


export default function Med ( {route} ) {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo remedio adicionado</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Quantidade: {route.params?.quantidade}</Text>
      <Text>Dias em que é tomado:{route.params?.days}</Text>
      <Text>Dose: {route.params?.dose.toFixed(0)}</Text>
      <Text>Tarja: {route.params?.tarja}</Text>
      <View>
        <NavButton />
      </View>
    </SafeAreaView>
  );
}