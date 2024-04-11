import { Text, View, SafeAreaView, Switch } from 'react-native';
import { useState } from 'react';
import {styles} from './Style';
import NavButton from '../../Components/NavButton/index';


export default function ViewMed ( {route} ) {

  const [status, setStatus] = useState(false);

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Remedio: {route.params?.nome}</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Quantidade: {route.params?.quantidade}</Text>
      <Text>Dias em que é tomado:{route.params?.days}</Text>
      <Text>Dose: {route.params?.dose.toFixed(0)}</Text>
      <View>
        <Text>Tomou remedio?</Text>
        <Switch
          value={status}
         onValueChange={ (valorSwitch) => setStatus(valorSwitch) }
        />
        <Text style={{textAlign: 'center', fontSize:30}}>
          {(status) ? "Tomou" : "Não tomou"}
        </Text>
      </View>      
      <View>
        <NavButton />
      </View>
    </SafeAreaView>
  );
}