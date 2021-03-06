import { StyleSheet, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { AntDesign } from '@expo/vector-icons'; 
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function LevelupScreen({ navigation }: RootStackScreenProps<'Levelup'>) {
  return (
    <View style={designpattern.container}>
      <View style={designpattern.center}>
        <AntDesign name="setting" size={80} color="lightgrey"/>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <View style={designpattern.buttondefault}>
            <Text style={designpattern.title}>improvement</Text>
        </View>
      </View>
      <View style={designpattern.center}>
        <View style={designpattern.buttondefault}>
            <Text style={designpattern.normal}>system update or else...</Text>
        </View>
      </View>
      <View style={designpattern.center}>
        <View style={designpattern.buttonprimary}>
            <Text style={designpattern.normaltextprimebutton}>just close and restart the app</Text>
        </View>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <View style={designpattern.buttondefault}>
            <Text style={designpattern.normal}>Because we`re working to be the best.</Text>
        </View>
      </View>
    </View>
  );
}
