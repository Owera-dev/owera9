import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { RootStackScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {designpattern} from "../assets/designpattern/designpattern";

export default function CreatedservicesScreen({ navigation }: RootStackScreenProps<'Createdservices'>) {
  
  const Createdservices = ({servicetitle}) => (
    
    <Pressable style={designpattern.buttondefault}>
      <View style={designpattern.alignitems}>
        <View style={designpattern.center}>
          <Text style={designpattern.normal}>{servicetitle}   </Text>
        </View>
      <AntDesign name="right" size={25} color="black"/>
      </View>
    </Pressable>
  );
  
  return (
    <View style={designpattern.containerleft}>
      <ScrollView>
        <Createdservices servicetitle="Spanish catalan expression"/>
        <Createdservices servicetitle="german expression"/>
        <Createdservices servicetitle="traffic law consultant"/>
        <Createdservices servicetitle="finish tax expert"/>
        <Createdservices servicetitle="cook asianstyle"/>
        <Createdservices servicetitle="bonsay expert"/>
        <Createdservices servicetitle="german expression"/>
        <Createdservices servicetitle="traffic law consultant"/>
        <Createdservices servicetitle="finish tax expert"/>
        <Createdservices servicetitle="german expression"/>
        <Createdservices servicetitle="traffic law consultant"/>
        <Createdservices servicetitle="finish tax expert"/>
        <Createdservices servicetitle="german expression"/>
        <Createdservices servicetitle="traffic law consultant"/>
        <Createdservices servicetitle="finish tax expert"/>
      </ScrollView>

      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <AntDesign onPress={() => navigation.goBack()} name="down" size={40} color="black"/>
      </View>
      <View style={designpattern.separator}/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}