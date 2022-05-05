import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { AntDesign } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CallendforcustomerScreen() {

  const Torate = ({ ratingcriteria }) => (
    <View style={designpattern.center}>
      <ScrollView horizontal={true}>
        <View style={designpattern.buttondefault}>
          <View style={designpattern.alignitems}>
            <AntDesign name="dislike2" size={20} color="lightgrey"/>
            <Text>   { ratingcriteria }   </Text>
            <AntDesign name="like2" size={20} color="lightgrey"/>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={designpattern.container}>
      <View style={designpattern.center}>
        <View style={designpattern.separator}/>
        <ScrollView>
          <Torate ratingcriteria="friendly"/>
          <Torate ratingcriteria="competent"/>
          <Torate ratingcriteria="straight"/>
          <Torate ratingcriteria="cool"/>
          <Torate ratingcriteria="english"/>
          <Torate ratingcriteria="german"/>
          <Torate ratingcriteria="french"/>
          <Torate ratingcriteria="green"/>
          <Torate ratingcriteria="CAD"/>
          <Torate ratingcriteria="badass"/>
        </ScrollView>
          <View style={designpattern.center}>
            <View style={designpattern.buttonsecondary}>
              <View style={designpattern.alignitems}>
                <AntDesign name="sharealt" size={25} color="black"/>
                <View style={designpattern.separatorhorizontal}/>
                  <View style={designpattern.center}>
                    <Text style={designpattern.normal}>reffer to family & friends</Text>
                  </View>
              </View>
            </View>
          </View>
          <View style={designpattern.center}>
            <Pressable style={designpattern.buttonprimary}>
              <AntDesign name="right" size={25} color="white"/>
            </Pressable>
          </View>
          <View style={designpattern.separatorsmall}/>
          <View style={designpattern.center}>
            <View style={designpattern.buttondefault}>
              <View style={designpattern.alignitems}>
                <AntDesign name="gift" size={25} color="black"/>
                <View style={designpattern.separatorhorizontal}/>
                  <View style={designpattern.center}>
                    <Text style={designpattern.normal}>12.50chf got refunded</Text>
                  </View>
              </View>
            </View>
          </View>
        <View style={designpattern.separator}/>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}