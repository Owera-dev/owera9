import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';


export default function SignupScreen({ navigation }: RootStackScreenProps<'Signup'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#SignupScreen</Text>
      <Button 
        title="got to contract"
        onPress={() => navigation.navigate("Contract")}
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