import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CallendforcustomerScreen() {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.title}>#CallendforcustomerScreen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}