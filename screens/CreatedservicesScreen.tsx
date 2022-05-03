import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {designpattern} from "../assets/designpattern/designpattern";

export default function CreatedservicesScreen({ navigation }: RootStackScreenProps<'Createdservices'>) {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.normal}>#all created services(on press to edit mode)</Text>
      <Text style={designpattern.normal}>#if no service: "no services jet"</Text>
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