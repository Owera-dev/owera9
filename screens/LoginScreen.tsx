import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Pressable } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import React from "react";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function LoginScreen() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={designpattern.container}>
      <View style={designpattern.center}>
        <Text style={designpattern.logo}>owera</Text>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <TextInput
          style={designpattern.inputactionrequired}
          onChangeText={onChangeText}
          value={text}
          placeholder="e-mail"
          placeholderTextColor="black"
        />
      </View>
      <View style={designpattern.center}>
        <TextInput
          style={designpattern.inputactionrequired}
          onChangeText={onChangeText}
          value={text}
          placeholder="password"
          placeholderTextColor="black"
        />
      </View>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttonprimary} >
          <Text style={designpattern.normaltextprimebutton}>Login</Text>
        </Pressable>
      </View>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttondefault} >
          <Text style={designpattern.normal}>Signup</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
