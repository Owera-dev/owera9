import { StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function SavedScreen({ navigation }: RootTabScreenProps<'Saved'>) {
  const [text, onChangeText] = React.useState("");

  const AppButtoncall = () => (
    <TouchableOpacity style={designpattern.appButtoncall}>
      <AntDesign name="videocamera" size={25} color="white"/>
    </TouchableOpacity>
  );

  const AppButtoncalloffline = () => (
    <TouchableOpacity style={designpattern.appButtoncalloffline}>
      <AntDesign name="videocamera" size={30} color="lightgrey"/>
    </TouchableOpacity>
  );

  return (
    <View style={designpattern.container}>
      <ScrollView>

        <View style={designpattern.alignitems}>
          <AppButtoncall />
            <View style={designpattern.savedservicelist}>
              <Text style={designpattern.title}>service title</Text>
              <View style={designpattern.alignitems}>
                <Text style={designpattern.normal}>13.20 chf /h   </Text>
                <Text style={designpattern.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={designpattern.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      <View style={designpattern.alignitems}>
          <AppButtoncalloffline />
            <View style={designpattern.savedservicelist}>
              <Text style={designpattern.title}>service title</Text>
              <View style={designpattern.alignitems}>
                <Text style={designpattern.normal}>13.20 chf /h   </Text>
                <Text style={designpattern.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={designpattern.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      
      </ScrollView>
      <TextInput
        style={designpattern.floatbuttonsearch}
        onChangeText={onChangeText}
        value={text}
        placeholder="search"
      />
    </View>
  );
}