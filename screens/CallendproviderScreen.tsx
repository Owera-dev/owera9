import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import { Text, View } from '../components/Themed';

export default function CallendproviderScreen() {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.title}>#CallendproviderScreen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
