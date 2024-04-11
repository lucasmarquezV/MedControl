import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 10,
    backgroundColor: 'transparent',
    flex: 1,
    width: 350,
  },
  button: {
    backgroundColor: 'pink',
    width: '50%', // Each button takes 50% width of the container
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText:{
    fontSize: 20,
  },
})

export {styles}