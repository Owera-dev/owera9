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
        <Text style={styles.normal}>why</Text>
        <Text style={styles.title}>
          Because the world is getting better{"\n"} 
          by collaborating more.</Text>
        <View style={styles.separator}/>

        <Text style={styles.normal}>how</Text>
        <Text style={styles.title}>By creating a phonebook where professionals can get videocalled.</Text>
        <View style={styles.separator}/>

        <Text style={styles.normal}>my benefit</Text>
        <Text style={styles.title}>
          Having always, instant & anywhere{"\n"}
          any professional{"\n"}
          through videocall available.</Text>
        <View style={styles.separator}/>

        <Button title="legal matters" onPress={() => navigation.navigate("Contract")} />
        <Button title="Logout" onPress={() => navigation.navigate("Login")} />
      </ScrollView>
      <AntDesign 
        onPress={() => navigation.goBack()}
        name="down" 
        size={40} 
        color="black"
        />
        <View style={styles.separator}/>
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
