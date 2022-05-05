import { StyleSheet, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React from "react";
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import { FAB, } from 'react-native-paper';
import {designpattern} from "../assets/designpattern/designpattern";


export default function ServeScreen({ navigation }: RootTabScreenProps<'Serve'>) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const Actions = ({ title }) => (
    <TouchableOpacity style={designpattern.buttondefault}>
      <View style={designpattern.alignitems}>
        <Text>{ title }  </Text>
        <AntDesign name="right" size={15} />
      </View>
    </TouchableOpacity>
  );

  const Ratingitem = ({ title, criterialikes, criteriadislikes }) => (
    <TouchableOpacity style={designpattern.buttondefault}>
      <View style={designpattern.alignitems}>
        <Text>{ title }   </Text>
        <AntDesign name="dislike2" size={20} />
        <Text>{ criteriadislikes }  </Text>
        <AntDesign name="like2" size={20} />
        <Text >{ criterialikes }</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={designpattern.container}>
      <View>
          <ScrollView>
          <Pressable style={designpattern.buttondefault} >
            <Text style={designpattern.title}>new video-service</Text>
          </Pressable>
            <ScrollView horizontal={true}>
              <View style={designpattern.alignitems}>
                <Pressable 
                  onPress={() => null}
                  style={designpattern.visuals}
                  >
                  <AntDesign 
                    name="closecircleo" 
                    size={20} 
                    style={{paddingTop: 100}}
                  />
                </Pressable>
              </View>
            </ScrollView>
            <Pressable onPress={() => null} style={designpattern.buttonsecondary} >
              <Text style={designpattern.normal}>upload picture & video</Text>
            </Pressable>
            
            <ScrollView horizontal={true} >
              <TextInput
                style={designpattern.inputactionrequired}
                onChangeText={onChangeText}
                value={text}
                placeholder="service name"
                placeholderTextColor="black"
              />
              <TextInput
                style={designpattern.inputactionrequired}
                onChangeText={onChangeText}
                value={text}
                placeholder="price /h"
                placeholderTextColor="black"
              />
              <TextInput
                style={designpattern.inputactionrequired}
                onChangeText={onChangeText}
                value={text}
                placeholder="select currency"
                placeholderTextColor="black"
              />
            </ScrollView>
            <View style={designpattern.alignitems}>
              <Pressable onPress={() => null} style={designpattern.buttonprimary} >
                <Text style={designpattern.normaltextprimebutton}>save</Text>
              </Pressable>
              <Pressable onPress={() => null} style={designpattern.buttondefault} >
                <Text style={designpattern.normal}>delete</Text>
              </Pressable>
            </View>
          <View style={designpattern.separator} />

          <Pressable style={designpattern.buttondefault} >
            <Text style={designpattern.title} >actions</Text>
          </Pressable>

          <ScrollView horizontal={true}>
            <View style={designpattern.alignitems}>
              <Actions title="edit services"/>
              <Actions title="payout"/>
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            <View style={designpattern.alignitems}>
              <Actions title="spoken languages"/>
              <Actions title="availability"/>
            </View>
          </ScrollView>
          <View style={designpattern.separator} />

          <Pressable style={designpattern.buttondefault} >
            <Text style={designpattern.title}>feedback to improve</Text>
          </Pressable>
          <ScrollView horizontal={true}>
            <Ratingitem title="friendly" criterialikes="123" criteriadislikes="456" />
            <Ratingitem title="nasty" criterialikes="2345" criteriadislikes="345" />
            <Ratingitem title="hasty" criterialikes="345" criteriadislikes="345" />
            <Ratingitem title="basty" criterialikes="234" criteriadislikes="456" />
          </ScrollView>
          <View style={designpattern.separator} />
          <View style={designpattern.separator} />
        </ScrollView>
        <Pressable 
            onPress={() => null}
            style={designpattern.buttonprimary}>
            <Text style={designpattern.title}>Send invitation</Text>
            <Text style={designpattern.normal}>you got 123 times saved</Text>
          </Pressable>
      </View>
    </View>
  );
}