import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons'; 
import * as React from 'react';
import { Button } from 'react-native';
import { RootStackScreenProps } from '../types';


export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.logo}>owera</Text>
        <Text style={styles.incorporation}>OWERA ltd inc. 2022     #We love our users</Text>
        <View style={styles.separator}/>
        <Text style={styles.title}>Why</Text>
        <Text style={styles.normal}>To have always and instant any kind of professional online available.</Text>
        <View style={styles.separator}/>
        <Text style={styles.title}>How</Text>
        <Text style={styles.normal}>To create a phonebook where professionals get videocalled.</Text>
        <View style={styles.separator}/>
        <Button title="legal matters" onPress={() => navigation.navigate("Contract")} />
        <Button title="Logout" onPress={() => navigation.navigate("Login")} />
      </ScrollView>
      <AntDesign 
        onPress={() => navigation.goBack()}
        name="left" 
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
  incorporation: {
    fontSize: 15,
    fontWeight: 'normal',
    color: "grey",
  },
  logo: {
    fontSize: 100,
    fontWeight: 'normal',
    color: "white",
    textShadowColor: "#8f7e7e",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonprimary: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
