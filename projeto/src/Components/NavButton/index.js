import { View, Pressable } from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function NavButton() {
  const navigation = useNavigation();
   const goBack = () => {
    navigation.goBack(); 
  }; 
  
  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => add(navigation)}>
      <Foundation name="home" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.button} onPress={goBack}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
    </View>

    
  );
}

function add(nav){
  nav.navigate('Home');
}

export default NavButton