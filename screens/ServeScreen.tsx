import { StyleSheet, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import { FAB, } from 'react-native-paper';

export default function ServeScreen({ navigation }: RootTabScreenProps<'Serve'>) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const AppButtondefault = ({ title }) => (
    <TouchableOpacity style={styles.appButtondefault}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );

  const AppButtonprime = ({ title }) => (
    <TouchableOpacity style={styles.appButtonprime}>
      <Text style={styles.textprime}>{title}</Text>
    </TouchableOpacity>
  );

  const AppButtonlink = ({ title }) => (
    <TouchableOpacity style={styles.appButtonlink}>
      <View style={styles.alignitemsinitem}>
        <Text>{ title }  </Text>
        <AntDesign name="right" size={20} />
      </View>
    </TouchableOpacity>
  );

  const AppButtonfeedback = ({ title, criterialikes, criteriadislikes }) => (
    <TouchableOpacity style={styles.appButtonfeedback}>
      <View style={styles.alignitemsinitem}>
        <Text>{ title }   </Text>
        <AntDesign name="dislike2" size={20} />
        <Text>{ criteriadislikes }  </Text>
        <AntDesign name="like2" size={20} />
        <Text >{ criterialikes }</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.margins}>
          <ScrollView>
            <Text style={styles.title}>creating new video-service</Text>
            <ScrollView horizontal={true} style={styles.horizontallist}>
              <View style={styles.alignitems}>
                <Pressable 
                  onPress={() => null}
                  style={styles.uploadfield}
                  >
                  <AntDesign 
                    name="pluscircleo" 
                    size={40} 
                    style={{ color: "orange" }}
                  />
                  <Text style={styles.uploadtext}>video &{"\n"} picture</Text>
                </Pressable>
                <Pressable 
                  onPress={() => null}
                  style={styles.visuals}
                  >
                  <AntDesign 
                    name="closecircleo" 
                    size={20} 
                    style={{paddingTop: 100}}
                  />
                </Pressable>
              </View>
            </ScrollView>
            <ScrollView horizontal={true} style={styles.horizontallist}>
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
                placeholder="price /h"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="select currency"
              />
              <AppButtonprime title="save service" />
              <AppButtondefault title="delete service" />
            </ScrollView>

          <View style={styles.separator} />
          <Text style={styles.title}>actions</Text>

          <ScrollView horizontal={true} style={styles.horizontallist}>
            <View style={styles.alignitems}>
              <AppButtonlink title="edit services"/>
              <AppButtonlink title="payout earnings" />
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            <View style={styles.alignitems}>
              <AppButtonlink title="spoken languages" />
              <AppButtonlink title="earn time" />
            </View>
          </ScrollView>

          <View style={styles.separator} />
          <Text style={styles.title}>feedback to improve</Text>
          <ScrollView horizontal={true} style={styles.horizontallist}>
            <AppButtonfeedback 
              title="criteria1" 
              criterialikes="123"
              criteriadislikes="456"
            />
          </ScrollView>

          <View style={styles.separator}/>
          
          <AntDesign 
          onPress={() => navigation.navigate("Search")}
          name="left" 
          size={40} 
          color="black"
          />
          <View style={styles.separator}/>
        </ScrollView>
        <Pressable 
            onPress={() => null}
            style={styles.fab}>
            <Text style={styles.floatbuttontexttitle}>send invitation</Text>
            <Text style={styles.floatbuttontext}>you got 123 times saved</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  alignitemsinitem: {
    flexDirection: "row",
  },
  alignitems: {
    flexDirection: "row",
  },
  horizontallist: {
    marginVertical: 5,
  },
  spacebetweenitems: {
    paddingRight: 10,
  },
  margins: {
    marginTop: 60,
  },
  uploadfield: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor:'orange',
    width: 130,
    height: 180,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
  uploadtext: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'normal',
    color: "orange",
  },
  visuals: {
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    width: 130,
    height: 180,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textprime: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "white",
  },
  neutralbutton: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
  },
  input: {
    marginLeft: 10,
    marginVertical: 5,
    paddingVertical: 10,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "orange",

    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
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
  floatbuttontexttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
  },
  floatbuttontext: {
    fontSize: 15,
    fontWeight: 'normal',
    color: "white",
  },
  fab: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 10,
  },
  appButtondefault: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
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
  appButtonlink: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
  appButtonfeedback: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
});