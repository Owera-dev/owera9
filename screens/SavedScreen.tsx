import { StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function SavedScreen({ navigation }: RootTabScreenProps<'Saved'>) {
  const [text, onChangeText] = React.useState("");

  const AppButtoncall = () => (
    <TouchableOpacity style={styles.appButtoncall}>
      <AntDesign name="videocamera" size={30} color="white"/>
    </TouchableOpacity>
  );

  const AppButtoncalloffline = () => (
    <TouchableOpacity style={styles.appButtoncalloffline}>
      <AntDesign name="videocamera" size={30} color="lightgrey"/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.alignitems}>
          <AppButtoncall />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncalloffline />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncall />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncalloffline />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncall />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncalloffline />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncall />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.alignitems}>
          <AppButtoncalloffline />
            <View style={styles.servicedatacontainer}>
              <Text style={styles.title}>service title</Text>
              <View style={styles.alignitems}>
                <Text style={styles.normal}>13.20 chf /h   </Text>
                <Text style={styles.normal}>name prename</Text>
              </View>
            </View>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ScrollView>
      <View style={styles.center}>
        <TextInput
          style={styles.floatbuttonsearch}
          onChangeText={onChangeText}
          value={text}
          placeholder="search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  servicedatacontainer: {
    marginLeft: 10,
  },
  alignitems: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
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
    marginVertical: 0,
    height: 1,
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  appButtoncall: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "orange",
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  appButtoncalloffline: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
  },
  floatbuttonsearch: {
    justifyContent: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
    borderWidth: 3,
    borderColor: "lightgrey",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
},
});
