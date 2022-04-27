import { StyleSheet, TextInput, ScrollView, Button, Pressable } from 'react-native';
import React from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';

export default function ServeScreen({ navigation }: RootTabScreenProps<'Serve'>) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>create a service</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="service name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="price per hour"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="select currency"
          />
        <Text style={styles.normal}>#display images if uploaded else only show icon upload</Text>
          <Pressable 
            onPress={() => null}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <AntDesign 
              name="pluscircleo" 
              size={30} 
              style={{ marginRight: 15 }}
            />
          </Pressable>
          <Pressable 
            onPress={() => null}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <AntDesign 
              name="closecircleo" 
              size={30} 
              style={{ marginRight: 15 }}
            />
          </Pressable>
          <Button title="Save this service" onPress={() => null}/>
          <Button title="delete" onPress={() => null}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>edit created services</Text>
          <Button 
          title="select service"
          onPress={() => navigation.navigate("Createdservices")}
          />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>payout the earning</Text>
        <Text style={styles.normal}>#link to stripe payout</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text style={styles.title}>select earn time</Text>
        <Text style={styles.normal}>#Monday to Sunday (if onpress then available)</Text>
        <Text style={styles.normal}>#Daytime availability from to </Text>








        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>About me</Text>
        <Text style={styles.normal}>#Language selector (activate or disactivate single language)</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Feedback to improve</Text>
        <Text style={styles.normal}>Listed criterias which got more than 0 ratings. Ranked from the most rated to the least.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>float(#Invite Saved)</Text>
        <Text style={styles.normal}>#Link to send invitation (as saved contact) #QR code</Text>
      </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  normal: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
