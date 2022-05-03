import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { AntDesign } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CallendforcustomerScreen() {
  return (
    <View style={designpattern.container}>
      <ScrollView>
        <ScrollView horizontal={true}>
        <View style={designpattern.buttonprimary}>
          <Text style={designpattern.normaltextprimebutton}>test</Text>
        </View>
        <View style={designpattern.buttonprimary}>
          <Text style={designpattern.titletextprimebutton}>test</Text>
        </View>
        <View style={designpattern.buttonprimary}>
          <AntDesign name="like2" size={45} />
        </View>
        </ScrollView>

        <ScrollView horizontal={true}>
        <View style={designpattern.buttonsecondary}>
          <Text style={designpattern.normal}>test</Text>
        </View>
        <View style={designpattern.buttonsecondary}>
          <Text style={designpattern.title}>test</Text>
        </View>
        <View style={designpattern.buttonsecondary}>
          <AntDesign name="like2" size={45} />
        </View>
        </ScrollView>

        <ScrollView horizontal={true}>
        <View style={designpattern.buttondefault}>
          <Text style={designpattern.normal}>test</Text>
        </View>
        <View style={designpattern.buttondefault}>
          <Text style={designpattern.title}>test</Text>
        </View>
        <View style={designpattern.buttondefault}>
          <AntDesign name="like2" size={45} />
        </View>
        </ScrollView>

        <ScrollView horizontal={true}>
        <View style={designpattern.inputactionrequired}>
          <Text style={designpattern.normal}>test</Text>
        </View>
        <View style={designpattern.inputactionrequired}>
          <Text style={designpattern.title}>test</Text>
        </View>
        <View style={designpattern.inputactionrequired}>
          <AntDesign name="like2" size={45} />
        </View>
        </ScrollView>

        <ScrollView horizontal={true}>
        <View style={designpattern.inputstandard}>
          <Text style={designpattern.normal}>test</Text>
        </View>
        <View style={designpattern.inputstandard}>
          <Text style={designpattern.title}>test</Text>
        </View>
        <View style={designpattern.inputstandard}>
          <AntDesign name="like2" size={45} />
        </View>
        </ScrollView>

















      </ScrollView>
      <Text style={designpattern.title}>#CallendforcustomerScreen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}