import { View, Image } from 'react-native';

const Foto = (props) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{ uri: props.img }}
        style={{ width: props.width, height: props.height, margin: props.margin }}
      />
    </View>
  );
};


export default Foto;
