import { StyleSheet, Button, ScrollView, TextInput, Image, TouchableOpacity, Pressable, ImageComponent  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import {designpattern} from "../assets/designpattern/designpattern";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const [text, onChangeText] = React.useState("");
  const colorScheme = useColorScheme();

  const Offervisuals = () => (
    <ScrollView horizontal={true} style={designpattern.picturemaxheight}>
      <Image source={require("../assets/images/xxy.jpg")} style={designpattern.picturesizing}/>
      <Image source={require("../assets/images/xxx.jpg")} style={designpattern.picturesizing}/>
      <Image source={require("../assets/images/xxy.jpg")} style={designpattern.picturesizing}/>
      <Image source={require("../assets/images/xxx.jpg")} style={designpattern.picturesizing}/>
      <Image source={require("../assets/images/xxy.jpg")} style={designpattern.picturesizing}/>
    </ScrollView>
  );

  const Aboutprovider = ({namee, prename, savedascontact, languages}) => (
    <View>
      <View style={designpattern.buttondefault}>
        <Text style={designpattern.normal}>languages spoken: {languages}</Text>
      </View>
      <View style={designpattern.buttondefault}>
        <Text style={designpattern.normal}>got {savedascontact} times saved</Text>
      </View>
      <View style={designpattern.buttondefault}>
        <Text style={designpattern.normal}>{namee} {prename}</Text>
      </View>
    </View>
  );

  const Ratingitem = ({ ratingtitle, criterialikes, criteriadislikes }) => (
    <View style={designpattern.buttondefault}>
      <View style={designpattern.alignitems}>
        <Text>{ ratingtitle }   </Text>
        <AntDesign name="dislike2" size={20} color="grey"/>
        <Text style={designpattern.normal}> { criteriadislikes }  </Text>
        <AntDesign name="like2" size={20} color="grey"/>
        <Text style={designpattern.normal}> { criterialikes }</Text>
      </View>
    </View>
  );

  const Offerconditions = ({price, currency}) => (
    <View>
      <View style={designpattern.buttondefault}>
        <Text style={designpattern.normal}>{price} {currency}per hour</Text>
      </View>
      <View style={designpattern.buttondefault}>
        <Text style={designpattern.normal}>unused time get 100% refunded</Text>
      </View>
    </View>
  );

  const Offercontents = () => (
    <View>
      <Offervisuals/>
      <Offerconditions price="12.50" currency="€"/>
      <Aboutprovider namee="Jurg" prename="Werner" savedascontact="123" languages="English, Spanish, German"/>
      <Ratingitem ratingtitle="friendlynes" criterialikes="12" criteriadislikes="34"/>
    </View>
  );

  const Serviceofferdisplay = ({servicetitle}) => (
    <View>
      <Offercontents/>
      <View style={designpattern.servicecontainer}>
        <View style={designpattern.center}>
          <View style={designpattern.alignitems}>
            <TouchableOpacity style={designpattern.buttonprimaryicon}>
              <AntDesign name="videocamera" size={25} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={designpattern.buttondefaulticon} onPress={Offerconditions}>
                <AntDesign name="shoppingcart" size={25} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity style={designpattern.buttondefaulticon}>
              <AntDesign name="user" size={25} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity style={designpattern.buttondefaulticon}>
              <AntDesign name="staro" size={25} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity style={designpattern.buttondefaulticon}>
              <AntDesign name="hearto" size={25} color="black"/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={designpattern.center}>
          <View style={designpattern.offertitling}>
            <Text style={designpattern.title}>{servicetitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={designpattern.containerleft}>
      <ScrollView>

      <Button 
          title="Signup"
          onPress={() => navigation.navigate("Signup")}
          />
      <Button 
          title="Login"
          onPress={() => navigation.navigate("Login")}
          />
      <Button 
          title="Incommingcall"
          onPress={() => navigation.navigate("Incommingcall")}
          />
      <Button 
          title="Levelup"
          onPress={() => navigation.navigate("Levelup")}
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
          onPress={() => navigation.navigate("Createdservices")}
          />
      <Serviceofferdisplay servicetitle="spanishclass"/>
      <Serviceofferdisplay servicetitle="english"/>
      <Serviceofferdisplay servicetitle="herewego"/>
      <Serviceofferdisplay servicetitle="allgood in budapest"/>

      </ScrollView>
      <TextInput
        style={designpattern.searchinfeed}
        onChangeText={onChangeText}
        value={text}
        placeholder="search"
        placeholderTextColor="black"
      />
    </View>
  );
}


