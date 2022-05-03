import { StyleSheet, Button, ScrollView, TextInput, Image, TouchableOpacity, Pressable  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import {designpattern} from "../assets/designpattern/designpattern";

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const [text, onChangeText] = React.useState("");

  const image = { uri: "https://reactjs.org/logo-og.png" };

  const Offerdisplay = () => (
    <View>
      <View style={designpattern.offercontainer}>
        <View style={designpattern.offernavigationbackground}>
          <Pressable style={designpattern.appButtoncall1}>
            <AntDesign name="videocamera" size={25} color="white"/>
          </Pressable>
          <View style={designpattern.separatorhorizontal}/>
          <View style={designpattern.offernavigationlength}>
            <ScrollView horizontal={true} style={designpattern.scrollviewofferoptions}>
            <Pressable style={designpattern.appButtondefault2}>
              <AntDesign name="shoppingcart" size={25} color="black"/>
            </Pressable>
            <View style={designpattern.separatorhorizontal}/>
            <Pressable style={designpattern.appButtondefault2}>
              <AntDesign name="hearto" size={25} color="black"/>
            </Pressable>
            <View style={designpattern.separatorhorizontal}/>
            <Pressable style={designpattern.appButtondefault2}>
              <AntDesign name="user" size={25} color="black"/>
            </Pressable>
            <View style={designpattern.separatorhorizontal}/>
            <Pressable style={designpattern.appButtondefault2}>
              <AntDesign name="staro" size={25} color="black"/>
            </Pressable>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
  
  return (
    <View style={designpattern.container}>
      <ScrollView>
      <Offerdisplay />
      <Offerdisplay />
      <Text style={designpattern.normal}>#Visuals #Service titles #About service(price 1h, "unused time get refunded") #about provider(language spoken, amount of Saved, name and prename,) #Ratings #Add service to Saved #Purch service #searchword input</Text>
      
      <Button 
          title="Login"
          onPress={() => navigation.navigate("Login")}
          />
      <Button 
          title="Incommingcall"
          onPress={() => navigation.navigate("Incommingcall")}
          />
      <Button 
          title="NotFound"
          onPress={() => navigation.navigate("NotFound")}
          />
      <Button 
          title="Callendforcustomer"
          onPress={() => navigation.navigate("Callendforcustomer")}
          />
      <Button 
          title="Callendprovider"
          onPress={() => navigation.navigate("Callendprovider")}
          />
      <Button 
          title="Createdservices"
          onPress={() => navigation.navigate("Callendprovider")}
          />
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


