import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CreatedservicesScreen({ navigation }: RootStackScreenProps<'Createdservices'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.normal}>#all created services(on press to edit mode)</Text>
      <Text style={styles.normal}>#if no service: "no services jet"</Text>
      <AntDesign 
        onPress={() => navigation.goBack()}
        name="down" 
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