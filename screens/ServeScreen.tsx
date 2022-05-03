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

  const AppButtondefault = ({ title }) => (
    <TouchableOpacity style={designpattern.appButtondefault}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );

  const AppButtonprime = ({ title }) => (
    <TouchableOpacity style={designpattern.appButtonprime}>
      <Text style={designpattern.textprime}>{title}</Text>
    </TouchableOpacity>
  );

  const AppButtonlink = ({ title }) => (
    <TouchableOpacity style={designpattern.appButtonlink}>
      <View style={designpattern.alignitemsinitem}>
        <Text>{ title }  </Text>
        <AntDesign name="right" size={20} />
      </View>
    </TouchableOpacity>
  );

  const AppButtonfeedback = ({ title, criterialikes, criteriadislikes }) => (
    <TouchableOpacity style={designpattern.appButtonfeedback}>
      <View style={designpattern.alignitemsinitem}>
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
      <View style={designpattern.margins}>
          <ScrollView>
            <Text style={designpattern.title}>new video-service</Text>
            <ScrollView horizontal={true} style={designpattern.horizontallist}>
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
                  <Text style={designpattern.uploadtext}>video &{"\n"} picture</Text>
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
            <ScrollView horizontal={true} style={designpattern.horizontallist}>
              <TextInput
                style={designpattern.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="service name"
              />
              <TextInput
                style={designpattern.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="price /h"
              />
              <TextInput
                style={designpattern.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="select currency"
              />
              <AppButtonprime title="save service" />
              <AppButtondefault title="delete service" />
            </ScrollView>

          <View style={designpattern.separator} />
          <Text style={designpattern.title}>actions</Text>

          <ScrollView horizontal={true} style={designpattern.horizontallist}>
            <View style={designpattern.alignitems}>
              <AppButtonlink 
                title="edit services"/>
              <AppButtonlink title="payout" />
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            <View style={designpattern.alignitems}>
              <AppButtonlink title="spoken languages" />
              <AppButtonlink title="availability" />
            </View>
          </ScrollView>

          <View style={designpattern.separator} />
          <Text style={designpattern.title}>feedback to improve</Text>
          <ScrollView horizontal={true} style={designpattern.horizontallist}>
            <AppButtonfeedback 
              title="criteria1" 
              criterialikes="123"
              criteriadislikes="456"
            />
          </ScrollView>
          <View style={designpattern.separator} />
          <View style={designpattern.separator} />
        </ScrollView>
        <Pressable 
            onPress={() => null}
            style={designpattern.floatingprimebottom}>
            <Text style={designpattern.floatbuttontexttitle}>Send invitation</Text>
            <Text style={designpattern.floatbuttontext}>you got 123 times saved</Text>
          </Pressable>
      </View>
    </View>
  );
}