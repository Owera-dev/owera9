import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';


export default function SignupScreen({ navigation }: RootStackScreenProps<'Signup'>) {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.title}>#SignupScreen</Text>
      <Button 
        title="got to contract"
        onPress={() => navigation.navigate("Contract")}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}