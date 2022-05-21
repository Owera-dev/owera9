import { StatusBar } from 'expo-status-bar';
import { Platform, TextInput, Pressable, Button, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';

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
        <View style={designpattern.alignitems}>
          <View style={designpattern.inputactionrequired}>
            <View style={designpattern.alignitems}>
              <Text style={designpattern.normal}>@ </Text>
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="e-mail"
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View style={designpattern.inputactionrequired}>
            <View style={designpattern.alignitems}>
              <AntDesign name="lock" size={20} />
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="password"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={designpattern.center}>
        <Pressable style={designpattern.buttonprimary} >
          <Text style={designpattern.normaltextprimebutton}>Login</Text>
        </Pressable>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <TouchableOpacity style={designpattern.buttoninformative}>
          <View style={designpattern.alignitems}>
            <AntDesign name="right" size={15} />
            <Text>signup</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
