import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import React from "react";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';


export default function SignupScreen({ navigation }: RootStackScreenProps<'Signup'>) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={designpattern.container}>
      <View style={designpattern.center}>
        <Text style={designpattern.logo}>owera</Text>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <View style={designpattern.alignitems}>
          <TextInput
            style={designpattern.inputactionrequired}
            onChangeText={onChangeText}
            value={text}
            placeholder="name"
            placeholderTextColor="black"
          />
          <TextInput
            style={designpattern.inputactionrequired}
            onChangeText={onChangeText}
            value={text}
            placeholder="prename"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View style={designpattern.center}>
        <View style={designpattern.alignitems}>
          <TextInput
            style={designpattern.inputactionrequired}
            onChangeText={onChangeText}
            value={text}
            placeholder="e-mail"
            placeholderTextColor="black"
          />
          <TextInput
            style={designpattern.inputactionrequired}
            onChangeText={onChangeText}
            value={text}
            placeholder="new password"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View style={designpattern.center}>
          <Pressable style={designpattern.buttonprimary} >
            <Text style={designpattern.normaltextprimebutton}>Signup</Text>
          </Pressable>

      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttondefault} >
          <Text style={designpattern.normal}>go to login</Text>
        </Pressable>
      </View>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttondefault} >
          <Text style={designpattern.normal}>by registering you accept the terms and conditions</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}