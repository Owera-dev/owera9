import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, TextInput, Pressable, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import React from "react";
import { AntDesign } from '@expo/vector-icons';


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
          <View style={designpattern.inputactionrequired}>
            <View style={designpattern.alignitems}>
              <AntDesign name="user" size={20} />
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="name"
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View style={designpattern.inputactionrequired}>
            <View style={designpattern.alignitems}>
              <AntDesign name="user" size={20} />
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="prename"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </View>
      </View>
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
                placeholder="new password"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={designpattern.center}>
          <Pressable style={designpattern.buttonprimary} >
            <Text style={designpattern.normaltextprimebutton}>Signup</Text>
          </Pressable>

      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <TouchableOpacity style={designpattern.buttoninformative}>
          <View style={designpattern.alignitems}>
            <AntDesign name="right" size={15} />
            <Text>login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <TouchableOpacity>
          <View style={designpattern.alignitems}>
            <View style={designpattern.center}>
              <AntDesign name="right" size={15} />
            </View>
            <View style={designpattern.separatorhorizontal}/>
            <Text>by registering you accept {'\n'}the terms and conditions</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}