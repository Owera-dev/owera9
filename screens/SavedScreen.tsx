import { Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {designpattern} from "../assets/designpattern/designpattern";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function SavedScreen({ navigation }: RootTabScreenProps<'Saved'>) {
  const [text, onChangeText] = React.useState("");

  const Service = ({servicetitle, priceperhour, currency, namee, prename }) => (
    <View>
        <View style={designpattern.alignitems}>
          <TouchableOpacity style={designpattern.buttonprimary}>
            <AntDesign name="videocamera" size={25} color="white"/>
          </TouchableOpacity>
          <View style={designpattern.separatorhorizontal}/>
          <View>
            <Text style={designpattern.title}>{servicetitle}</Text>
            <Text style={designpattern.normal}>{priceperhour} {currency}    {namee} {prename}</Text>
          </View>
        </View>
        <View style={designpattern.separatorsmall}/>
    </View>
  );

  const Provideroffline = () => (
    <TouchableOpacity style={designpattern.buttondefault}>
      <AntDesign name="videocamera" size={25} color="lightgrey"/>
    </TouchableOpacity>
  );

  return (
    <View style={designpattern.containerleft}>
      <ScrollView>
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />

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