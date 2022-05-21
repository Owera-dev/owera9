import { StyleSheet, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import { FAB, } from 'react-native-paper';
import {designpattern} from "../assets/designpattern/designpattern";
import * as React from 'react';
import CreatedservicesScreen from './CreatedservicesScreen';


export default function ServeScreen({ navigation }: RootTabScreenProps<'Serve'>) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const Actions = ({ title }) => (
    <TouchableOpacity style={designpattern.buttoninformative}>
      <View style={designpattern.alignitems}>
        <AntDesign name="right" size={15} />
        <Text> { title }</Text>
      </View>
    </TouchableOpacity>
  );

  const Ratingitem = ({ ratingtitle, criterialikes, criteriadislikes }) => (
    <View style={designpattern.buttoninformative}>
      <View style={designpattern.alignitems}>
        <Text>{ ratingtitle }   </Text>
        <AntDesign name="dislike2" size={20} />
        <Text>{ criteriadislikes }  </Text>
        <AntDesign name="like2" size={20} />
        <Text >{ criterialikes }</Text>
      </View>
    </View>
  );

  return (
    <View >
      <View >
          <ScrollView>
            <View style={designpattern.defaultbackground}>
            <Text style={designpattern.title}>My video-service</Text>
            <View style={designpattern.separatorofferdisplay}/>
              <TextInput
                style={designpattern.buttonactionrequest}
                onChangeText={onChangeText}
                value={text}
                placeholder="Title"
                placeholderTextColor="black"
              />
              <View style={designpattern.alignitems} >
              <TouchableOpacity style={designpattern.buttoninformative}>
                <View style={designpattern.alignitems}>
                  <AntDesign name="down" size={20} color="black"/>
                  <Text style={designpattern.normal}> 20 /h</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={designpattern.buttoninformative}>
                <View style={designpattern.alignitems}>
                  <AntDesign name="down" size={20} color="black"/>
                  <Text style={designpattern.normal}> CHF</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={designpattern.separatorofferdisplay}/>
            <View style={designpattern.alignitems}>
                <TouchableOpacity style={designpattern.roundbutton}>
                    <AntDesign name="upload" size={30} color="black"/>
                </TouchableOpacity>
              <ScrollView horizontal={true}>
                <Pressable onPress={() => null} style={designpattern.visuals} >
                  <AntDesign name="closecircleo" size={20} />
                </Pressable>
                <Pressable onPress={() => null} style={designpattern.visuals} >
                  <AntDesign name="closecircleo" size={20} />
                </Pressable>
                <Pressable onPress={() => null} style={designpattern.visuals} >
                  <AntDesign name="closecircleo" size={20} />
                </Pressable>
              </ScrollView>
            </View>
            <View style={designpattern.separatorofferdisplay}/>
            <View style={designpattern.alignitems}>
              <View style={designpattern.center}>
                  <TouchableOpacity style={designpattern.primary}>
                      <View style={designpattern.alignitems}>
                          <AntDesign name="save" size={25} color="white"/>
                          <View style={designpattern.center}>
                              <Text style={designpattern.normaltextprimebutton}>  save</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={designpattern.separatorhorizontal}/>
              <View style={designpattern.separatorhorizontal}/>
              <View style={designpattern.center}>
                  <TouchableOpacity style={designpattern.buttoninformative}>
                      <View style={designpattern.alignitems}>
                          <AntDesign name="delete" size={20} color="black"/>
                      </View>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={designpattern.defaultbackground}>
            <Text style={designpattern.title} >Actions</Text>
            <View style={designpattern.separatorofferdisplay}/>

            <View style={designpattern.alignitems}>
              <Pressable onPress={() => navigation.navigate("")}>
                <Actions title="edit services"/>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("")}>
                <Actions title="payout"/>
              </Pressable>
            </View>
            <View style={designpattern.alignitems}>
              <Pressable onPress={() => navigation.navigate("")}>
                <Actions title="spoken languages"/>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("")}>
                <Actions title="availability"/>
              </Pressable>
            </View>
          </View>
          

          
        <View style={designpattern.defaultbackground}>
        <Text style={designpattern.title}>Feedback to improve</Text>
        <View style={designpattern.separatorofferdisplay}/>
          <ScrollView>
            <Ratingitem ratingtitle="friendly" criterialikes="123" criteriadislikes="456" />
            <Ratingitem ratingtitle="nasty" criterialikes="2345" criteriadislikes="345" />
            <Ratingitem ratingtitle="hasty" criterialikes="345" criteriadislikes="345" />
            <Ratingitem ratingtitle="basty" criterialikes="234" criteriadislikes="456" />
          </ScrollView>
        </View>
          <View style={designpattern.separator} />
          <View style={designpattern.separator} />
        </ScrollView>
        <TouchableOpacity onPress={() => null} style={designpattern.serveinviter}>
          <View style={designpattern.alignitems}>
            <View style={designpattern.center}>
              <AntDesign name="sharealt" size={30} color="white"/>
            </View>
            <View style={designpattern.separatorhorizontal}/>
              <View style={designpattern.centerleft}>
                <Text style={designpattern.titletextprimebutton}>send invitation</Text>
                <Text style={designpattern.normaltextprimebutton}>you got 123x saved</Text>
              </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}