import { Button, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as React from 'react';
import {designpattern} from "../assets/designpattern/designpattern";
import useColorScheme from '../hooks/useColorScheme';


export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const [text, onChangeText] = React.useState("");
  const colorScheme = useColorScheme();
  
  const Offerinfo = ({namee, prename, savedascontact, languages, ratingtitle, criterialikes, criteriadislikes, price, currency }) => (
    <View style={designpattern.defaultbackground}>
    
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="user" size={20} color="black"/>
                <Text style={designpattern.titlesmall}>   {namee} {prename}</Text>
            </View>
        </View>
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="hearto" size={20} color="black"/>
                <Text style={designpattern.normal}>   {savedascontact}x saved</Text>
            </View>
        </View>

        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="message1" size={20} color="black"/>
                <Text style={designpattern.normal}>   {languages}</Text>
            </View>
        </View>  
        <View style={designpattern.separatorsmall}/>
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="gift" size={20} color="black"/>
                <Text style={designpattern.normal}>   unused time get 100% refunded</Text>
            </View>
        </View>
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="dashboard" size={20} color="black"/>
                <Text style={designpattern.normal}>   {price} {currency} h</Text>
            </View>
        </View>
    
        <View style={designpattern.separatorsmall}/>
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <AntDesign name="staro" size={20} color="black"/>
                <Text>   Reputation</Text>
            </View>
        </View>
        <ScrollView horizontal={true}>
        <View style={designpattern.buttoninformative}>
            <View style={designpattern.alignitems}>
                <Text>{ ratingtitle }   </Text>
                <AntDesign name="dislike2" size={20} color="black"/>
                <Text style={designpattern.normal}> { criteriadislikes }  </Text>
                <AntDesign name="like2" size={20} color="black"/>
                <Text style={designpattern.normal}> { criterialikes }</Text>
            </View>
        </View>
    </ScrollView>
    </View>
  );

  const Offervisuals = () => (
    <View style={designpattern.alignitems}>
      <Image source={require("../assets/images/xxy.jpg")} style={designpattern.picturesizing}/>
      <View style={designpattern.separatorofferdisplay}/>
      <Image source={require("../assets/images/xxx.jpg")} style={designpattern.picturesizing}/>
      <View style={designpattern.separatorofferdisplay}/>
    </View>
  );

  const Offercontents = () => (
    <View>
        <ScrollView horizontal={true} style={designpattern.picturemaxheight}>
        <Offervisuals/>
        <Offerinfo
            price="12.50"
            currency="chf"
            namee="Jurg" 
            prename="Werner" 
            savedascontact="123" 
            languages="English Spanish German"
            ratingtitle="friendlynes" 
            criterialikes="12" 
            criteriadislikes="34"
        />
        </ScrollView>
    </View>
  );

  const Serviceofferdisplay = ({servicetitle}) => (
    <View style={designpattern.offerbackground}>
      <Offercontents/>
      <View style={designpattern.servicecontainer}>
        <View style={designpattern.centerleft}>
        <View style={designpattern.separatorofferdisplay}/>
          <View style={designpattern.alignitems}>
            <View style={designpattern.separatorhorizontal}/>
                <TouchableOpacity style={designpattern.primary}>
                <AntDesign name="videocamera" size={25} color="white"/>
                </TouchableOpacity>

            <View style={designpattern.separatorhorizontal}/>
            <ScrollView horizontal={true}>
                <View style={designpattern.center}>
                    <View style={designpattern.alignitems}>
                        <View style={designpattern.center}>
                            <Text style={designpattern.titlesmall}>{servicetitle}</Text>
                        </View>
                        <View style={designpattern.separatorhorizontal}/>
                        <View style={designpattern.separatorhorizontal}/>
                        <TouchableOpacity style={designpattern.buttoninformative}>
                        <AntDesign name="hearto" size={25} color="orange"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={designpattern.buttoninformative}>
                        <AntDesign name="sharealt" size={25} color="orange"/>
                        </TouchableOpacity>
                        <View style={designpattern.separatorhorizontal}/>
                    </View>
                </View>
            </ScrollView>
            <View style={designpattern.separatorhorizontal}/>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={designpattern.containerleft}>
      <ScrollView>
      <View style={designpattern.separator}/>
      <View style={designpattern.center}>
        <Text style={designpattern.logo}>owera</Text>
      </View>

      <Serviceofferdisplay servicetitle="spanishclass"/>
      <Serviceofferdisplay servicetitle="english"/>
      <Serviceofferdisplay servicetitle="extralongtextextralongtextextralongtextextralongtextextralongtext"/>
      <Serviceofferdisplay servicetitle="herewego"/>
      <Serviceofferdisplay servicetitle="allgood in budapest"/>

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
      <Button 
          title="Searchfeed"
          onPress={() => navigation.navigate("Searchfeed")}
          />

      </ScrollView>
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


