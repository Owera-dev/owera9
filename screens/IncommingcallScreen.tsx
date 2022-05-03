import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { RootStackScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import {designpattern} from "../assets/designpattern/designpattern";

export default function IncommingcallScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      
      <AntDesign 
        onPress={() => null}
        name="close" 
        size={40} 
        color="black"
      />
      <Text style={styles.normal}>Title of provided service</Text>
      <Text style={styles.title}>12.50 chf /h</Text>
        <AntDesign 
          name="right" 
          size={40} 
          color="black"
        />
        <AntDesign 
          name="videocamera" 
          size={40} 
          color="black"
        />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});