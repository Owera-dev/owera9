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
    <View style={designpattern.container}>
      <ScrollView>
        <View style={designpattern.center}>
          <Text style={designpattern.logo}>owera</Text>
        </View>
        <View style={designpattern.left}>
          <Text style={designpattern.normal}>why</Text>
          <Text style={designpattern.title}>
            Because the world is getting better{"\n"} 
            by collaborating more.</Text>
          <View style={designpattern.separator}/>
          <Text style={designpattern.normal}>how</Text>
          <Text style={designpattern.title}>By creating a phonebook where professionals can get videocalled.</Text>
          <View style={designpattern.separator}/>
          <Text style={designpattern.normal}>my benefit</Text>
          <Text style={designpattern.title}>
            Having always, instant & anywhere{"\n"}
            any professional{"\n"}
            through videocall available.</Text>
          <View style={designpattern.separator}/>
        </View>
        <View style={designpattern.center}>
          <View style={designpattern.alignitems}>
            <Pressable onPress={() => navigation.navigate("Contract")} style={designpattern.appButtondefault}>
              <Text>Log out</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Contract")} style={designpattern.appButtondefault}>
              <Text>legal</Text>
            </Pressable>
          </View>
          <View style={designpattern.separatorsmall}/>
          <Text style={designpattern.incorporation}>OWERA ltd inc. 2022</Text>
          <Text style={designpattern.incorporation}>#We love our users.</Text>
        </View>
      </ScrollView>
      <View style={designpattern.center}>
        <AntDesign 
          onPress={() => navigation.goBack()}
          name="down" 
          size={40} 
          color="black"
          />
        <View style={designpattern.separator}/>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}