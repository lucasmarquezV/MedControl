import { Text, TextInput, View, Picker, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';
import {styles} from './style';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../Components/NavButton/index';


const AddMed = () =>{
  const [type, setType] = useState(1);
  const [medicines, setMedicines] = useState('');
  const [qtd, setQtd] = useState(0);
  const [dose, setDose] = useState(0);
  const [days, setDays] = useState('');

  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Adicionar remedio</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome: "
          onChangeText={setMedicines}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade: "
          onChangeText={setQtd}
        />
        <TextInput
          style={styles.input}
          placeholder="Dias em que é tomado: "
          onChangeText={setDays}
        />
        <View style={styles.slider}>
          <Text style={styles.label}>Limite: {dose.toFixed(0)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              onValueChange={(valorSelecionado) => setDose(valorSelecionado)}
              value={dose}
            />
        </View>
        <Picker
          style = {styles.picker}
          selectedValue = {type}
          onValueChange= {(itemValue, itemIndex) => setType(itemValue) }
        >
          <Picker.Item key={1} value={"Tarja Preta"} label="Tarja Preta" />
          <Picker.Item key={2} value={"Tarja Amarela"} label="Tarja Amarela" /> 
        </Picker>
        <Pressable style={styles.button} onPress={() => adicionar(navigation, medicines, qtd, days, dose, type)}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
         <View>
        <NavButton />
      </View>
    </SafeAreaView>
  );
}

function adicionar(nav, medicines, qtd, days, dose, type) {
  nav.navigate('Med', {
    nome: medicines,
    quantidade: qtd,
    days: days,
    dose: dose,
    tarja: type
  });
}

export default AddMed;