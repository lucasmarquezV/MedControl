import { Text, View } from 'react-native';
import {styles} from './style';
import Img from '../Image/index';

const Medicine = (props) => {

  return(
    <View style={styles.medicine}>
      <Img img={props.data.img} width={100} height={100} margin={10} />
      <Text style={styles.title}>{props.data.nome}</Text>
      <Text>Dias tomado: {props.data.dias}</Text>
      <Text>Dose diaria: {props.data.dose}</Text>
      <Text>Quantidade: {props.data.quantidade}</Text>
    </View>
  );
}

export default Medicine;
