import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { AntDesign } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CallendforcustomerScreen() {
  return (
    <View style={designpattern.container}>

      <View style={designpattern.buttonprimary}>
        <Text style={designpattern.normaltextprimebutton}>test</Text>
      </View>
      <View style={designpattern.buttonprimary}>
        <Text style={designpattern.titletextprimebutton}>test</Text>
      </View>
      <View style={designpattern.buttonprimary}>
        <AntDesign name="like2" size={45} />
      </View>

      <View style={designpattern.buttonprimary}>
        <Text style={designpattern.normaltextprimebutton}>test</Text>
      </View>
      <View style={designpattern.buttonprimary}>
        <Text style={designpattern.titletextprimebutton}>test</Text>
      </View>
      <View style={designpattern.buttonprimary}>
        <AntDesign name="like2" size={45} />
      </View>

      <Text style={designpattern.title}>#CallendforcustomerScreen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}