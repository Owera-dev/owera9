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
        <AntDesign name="right" size={20} />
        <Text>{ title }</Text>
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
            <Text style={designpattern.title}>new video-service</Text>
            <ScrollView horizontal={true}>
              <View style={designpattern.alignitems}>
                <Pressable 
                  onPress={() => null}
                  style={designpattern.uploadfield}
                  >
                  <AntDesign 
                    name="pluscircleo" 
                    size={40} 
                    style={{ color: "orange" }}
                  />
                  <Text style={designpattern.normal}>video &{"\n"} picture</Text>
                </Pressable>
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
            <ScrollView horizontal={true} >
              <TextInput
                style={designpattern.inputactionrequired}
                onChangeText={onChangeText}
                value={text}
                placeholder="service name"
              />
              <TextInput
                style={designpattern.inputactionrequired}
                onChangeText={onChangeText}
                value={text}
                placeholder="price /h"
              />
              <TextInput
                style={designpattern.inputstandard}
                onChangeText={onChangeText}
                value={text}
                placeholder="select currency"
              />
              <Pressable onPress={() => null} style={designpattern.buttonprimary} >
                <Text style={designpattern.buttonprimary}>save service</Text>
              </Pressable>
              <Pressable onPress={() => null} style={designpattern.buttonprimary} >
                <Text style={designpattern.buttonprimary}>delete service</Text>
              </Pressable>
            </ScrollView>
          <View style={designpattern.separator} />
          <Text style={designpattern.title}>actions</Text>

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
          <Text style={designpattern.title}>feedback to improve</Text>
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