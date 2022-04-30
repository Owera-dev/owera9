import { StyleSheet, ScrollView, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function SavedScreen({ navigation }: RootTabScreenProps<'Saved'>) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
      <AntDesign 
        onPress={() => navigation.navigate("Callendforcustomer")}
        name="videocamera" 
        size={25} 
        color="black"
      />
      <Text style={styles.title}>#service title</Text>
      <Text style={styles.normal}>#price per hour #name surname</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <AntDesign 
        onPress={() => navigation.navigate("Search")}
        name="left" 
        size={40} 
        color="black"
      />
      </ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="search saved services"
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
