import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons'; 
import * as React from 'react';
import { Button } from 'react-native';
import { RootStackScreenProps } from '../types';
import {designpattern} from "../assets/designpattern/designpattern";


export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.center}>
          <Text style={styles.logo}>owera</Text>
        </View>
        <View style={styles.left}>
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
        </View>
        <View style={styles.center}>
          <View style={styles.alignitems}>
            <Pressable onPress={() => navigation.navigate("Contract")} style={styles.appButtondefault}>
              <Text>Log out</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Contract")} style={styles.appButtondefault}>
              <Text>legal</Text>
            </Pressable>
          </View>
          <View style={styles.separatorsmall}/>
          <Text style={styles.incorporation}>OWERA ltd inc. 2022</Text>
          <Text style={styles.incorporation}>#We love our users.</Text>
        </View>
      </ScrollView>
      <View style={styles.center}>
        <AntDesign 
          onPress={() => navigation.goBack()}
          name="down" 
          size={40} 
          color="black"
          />
        <View style={styles.separator}/>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: "center",
  },
  left: {
    marginLeft: 10,
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
  separatorsmall: {
    marginVertical: 10,
    height: 0,
  },
  alignitems: {
    flexDirection: "row",
  },
  buttonprimary: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  appButtondefault: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
});
