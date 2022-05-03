import { StyleSheet, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={designpattern.container}>
      <Text style={designpattern.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={designpattern.link}>
        <Text style={designpattern.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
