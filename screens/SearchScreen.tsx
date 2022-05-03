import { StyleSheet, Button, ScrollView, TextInput, Image, TouchableOpacity, Pressable  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const [text, onChangeText] = React.useState("");

  const image = { uri: "https://reactjs.org/logo-og.png" };

  const Offerdisplay = () => (
    <View>
      <View style={styles.offercontainer}>

        <ScrollView horizontal={true} style={styles.imagerow}>
          <Image source={image} resizeMode="cover" style={styles.image}/>
          <Image source={image} resizeMode="cover" style={styles.image}/>
        </ScrollView>

        <View style={styles.offernavigationbackground}>
          <Pressable style={styles.appButtoncall}>
            <AntDesign name="videocamera" size={25} color="white"/>
          </Pressable>
          <View style={styles.separatorsmall}/>
          <View style={styles.offernavigationlength}>
            <ScrollView horizontal={true} style={styles.scrollviewofferoptions}>
            <Pressable style={styles.appButtondefault}>
              <AntDesign name="shoppingcart" size={25} color="black"/>
            </Pressable>
            <View style={styles.separatorsmall}/>
            <Pressable style={styles.appButtondefault}>
              <AntDesign name="hearto" size={25} color="black"/>
            </Pressable>
            <View style={styles.separatorsmall}/>
            <Pressable style={styles.appButtondefault}>
              <AntDesign name="user" size={25} color="black"/>
            </Pressable>
            <View style={styles.separatorsmall}/>
            <Pressable style={styles.appButtondefault}>
              <AntDesign name="staro" size={25} color="black"/>
            </Pressable>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <Offerdisplay />
      <Offerdisplay />
      <AntDesign 
        onPress={() => navigation.navigate("Callendforcustomer")}
        name="videocamera" 
        size={25} 
        color="black"
      />
      <Text style={styles.title}>service title</Text>
      <Text style={styles.normal}>#Visuals #Service titles #About service(price 1h, "unused time get refunded") #about provider(language spoken, amount of Saved, name and prename,) #Ratings #Add service to Saved #Purch service #searchword input</Text>
      
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
      </ScrollView>
      <TextInput
        style={styles.floatbuttonsearch}
        onChangeText={onChangeText}
        value={text}
        placeholder="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  imagerow: {
    flexDirection: "row",
  },
  offercontainer: {
    backgroundColor: "lightgrey",
    marginHorizontal: 10,
    height: 550,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.40,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  center: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  offernavigationlength: {
    borderRadius: 20,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  separatorsmall: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 10,
  },
  scrollviewofferoptions: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 20,
  },
  offernavigationbackground: {
    backgroundColor: 'rgba(5,5,5,1)',
    position: "absolute",
    bottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 40,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  floatbuttonsearch: {
    borderRadius: 20,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  appButtonprime: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "orange",
    shadowOffset: { width: 0, height: 2 },
  },
  appButtondefault: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
  appButtoncall: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 0,
    borderRadius: 20,
    backgroundColor: "orange",
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
});
