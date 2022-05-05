import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { RootStackScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import {designpattern} from "../assets/designpattern/designpattern";

export default function IncommingcallScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <View style={designpattern.container}>
      <View style={designpattern.center}>
        <Text style={designpattern.logo}>owera</Text>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttondefault}>
          <View style={designpattern.alignitems}>
            <View style={designpattern.center}>
              <Text style={designpattern.normal}>deny </Text>
            </View>
            <AntDesign 
              name="close" 
              size={20} 
              color="black"
            />
          </View>
        </Pressable>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.alignitems}>
        <View style={designpattern.center}>
          <View style={designpattern.buttondefault}>
            <Text style={designpattern.normal}>12.50 chf /h</Text>
          </View>
        </View>
        <View style={designpattern.center}>
          <View style={designpattern.buttondefault}>
            <Text style={designpattern.normal}>Hans Guckindieluft</Text>
          </View>
        </View>
      </View>
      <View style={designpattern.center}>
        <View style={designpattern.buttondefault}>
          <Text style={designpattern.normal}>Rechtsberatung</Text>
        </View>
      </View>
      <View style={designpattern.separatorsmall}/>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttonprimary}>
          <View style={designpattern.alignitems}>
            <View style={designpattern.center}>
              <Text style={designpattern.titletextprimebutton}>got to call    </Text>
            </View>
            <AntDesign 
              name="videocamera" 
              size={30} 
              color="white"
            />
          </View>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
