import { Text, FlatList, View, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';
import {styles} from './style';
import Medicine from '../../Components/Medicines/Index';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../../Components/NavButton/index';
import Calendar from '../../Components/Calendar/index';

const Home = () =>{
  let ini_medicines = [
    {id: 1, nome: 'Predsin', dias: 'Segunda, Quarta', dose: 2, quantidade: 16, img:"https://santaluciadrogaria.vtexassets.com/arquivos/ids/165222/7891142177209.png?v=637638182987470000"},
    {id: 2, nome: 'Anticoncepcional', dias: 'Segunda, Quarta, Sabado', dose: 1, quantidade: 8, img: "https://th.bing.com/th/id/R.cb81914f22a0695ed81e24da973030ca?rik=Ut22sUaRAf4qpA&pid=ImgRaw&r=0"},
    {id: 3, nome: 'Metodraxto', dias: 'Terça, Quinta', dose: 4, quantidade: 20, img: "https://th.bing.com/th/id/R.b6ce68d7add9c83e8d31f361af1fee36?rik=A2GwalNwUlzZug&pid=ImgRaw&r=0"},
    {id: 4, nome: 'Alguma coisa', dias: 'Todos os dias', dose: 1, quantidade: 35, img: "https://drogariapop.com.br/wp-content/uploads/2022/08/medicamento-generico-scaled-1.jpeg"},
  ]

  const navigation = useNavigation(); 

  const [medicines, setMedicines] = useState(ini_medicines);

  function verMedicine (medicineData) {
  navigation.navigate('ViewMed', {
    nome: medicineData.nome,
    quantidade: medicineData.quantidade,
    days: medicineData.dias,
    dose: medicineData.dose,
  });
}


  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seus remedios</Text>
      <View style={styles.scrollViewContainer}>
      <ScrollView>
        <FlatList
          data={medicines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Medicine data={item} />
              <Pressable style={styles.button} onPress={() => verMedicine(item)}>
                <Text style={styles.buttonText}>Ver Remédio</Text>
              </Pressable>
            </View>
          )}
        />
      </ScrollView>
      </View>
      <Calendar />
      <Pressable style={styles.button} onPress={() => add(navigation)}>
          <Text style={styles.buttonText}>Adicionar novo Remedio</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => note(navigation)}>
          <Text style={styles.buttonText}>Anotações</Text>
      </Pressable>
      <View>
        <NavButton />
      </View>
    </SafeAreaView>
  );
}

function add(nav){
  nav.navigate('AddMed');
}

function note(nav){
  nav.navigate('Annotation');
}

export default Home;