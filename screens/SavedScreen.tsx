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
    <View style={designpattern.left}>
        <View style={designpattern.alignitems}>
          
          <TouchableOpacity style={designpattern.primary}>
            <AntDesign name="videocamera" size={25} color="white"/>
          </TouchableOpacity>
          <View style={designpattern.separatorhorizontal}/>
          <ScrollView horizontal={true}>
            <View>
              <Text style={designpattern.titlesmall}>{servicetitle}        </Text>
              <Text style={designpattern.normalpassive}>{priceperhour} {currency}    {namee} {prename}</Text>
            </View>
          </ScrollView>
          <View style={designpattern.separatorhorizontal}/>
            <TouchableOpacity style={designpattern.buttoninformative}>
            <AntDesign name="close" size={15} color="black"/>
            </TouchableOpacity>
          <View style={designpattern.separatorhorizontal}/>
        </View>
        <View style={designpattern.separatorhorizontallist}/>
    </View>
  );

  return (
    <View>
      <View>
        <ScrollView>
          <View style={designpattern.separator}/>
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanish prononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciationnnnnnnnn" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
          <Service servicetitle="spanishprononciation" priceperhour="12.50" currency="chf" namee="Heinz" prename="Ketchup" />
        </ScrollView>
      </View>
        <View style={designpattern.searchinfeed}>
          <View style={designpattern.alignitems}>
            <AntDesign name="search1" size={20} color="black"/>
            <View style={designpattern.separatorhorizontal}/>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder="search"   
              placeholderTextColor="black"
            />
          </View>
        </View>
    </View>
  );
}