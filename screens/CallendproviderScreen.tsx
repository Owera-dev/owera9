import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { AntDesign } from '@expo/vector-icons'; 

import { Text, View } from '../components/Themed';

export default function CallendproviderScreen() {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.logo}>owera</Text>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttondefault}>
            <Text style={designpattern.title}>12.50€ earned</Text>
        </Pressable>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.alignitems}>
        <View style={designpattern.center}>
          <Pressable style={designpattern.buttonsecondary}>
            <View style={designpattern.alignitems}>
              <AntDesign name="rocket1" size={25} color="black"/>
              <View style={designpattern.center}>
                <Text style={designpattern.normal}>  invite more</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={designpattern.center}>
          <Pressable style={designpattern.buttonprimary}>
            <AntDesign name="right" size={25} color="white"/>
          </Pressable>
        </View>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
