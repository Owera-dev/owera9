/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import LevelupScreen from '../screens/LevelupScreen';
import SavedScreen from '../screens/SavedScreen';
import ServeScreen from '../screens/ServeScreen';
import SearchfeedScreen from '../screens/SearchfeedScreen';
import CallendforcustomerScreen from '../screens/CallendforcustomerScreen';
import CallendproviderScreen from '../screens/CallendproviderScreen';
import ContractScreen from '../screens/ContractScreen';
import IncommingcallScreen from '../screens/IncommingcallScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import CreatedservicesScreen from '../screens/CreatedservicesScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Levelup" 
        component={LevelupScreen} 
        options={{ title: 'Levelup' }} 
      />
      <Stack.Screen 
        name="Callendforcustomer" 
        component={CallendforcustomerScreen} 
      />
      <Stack.Screen 
        name="Callendprovider" 
        component={CallendproviderScreen} 
      />
      <Stack.Screen 
        name="Incommingcall" 
        component={IncommingcallScreen} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
      />
      <Stack.Screen 
        name="Searchfeed" 
        component={SearchfeedScreen} 
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          />
        <Stack.Screen 
          name="Createdservices" 
          component={CreatedservicesScreen} 
          />
        <Stack.Screen 
          name="Contract" 
          component={ContractScreen} 
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Search"
        component={SearchfeedScreen}
        options={({ navigation }: RootTabScreenProps<'Search'>) => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="earth" size={25} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign 
                name="home" 
                size={25} 
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={({ navigation }: RootTabScreenProps<'Saved'>) => ({
          title: 'Saved',
          tabBarIcon: ({ color }) => <AntDesign name="hearto" size={25} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign 
                name="home" 
                size={25} 
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Serve"
        component={ServeScreen}
        options={({ navigation }: RootTabScreenProps<'Serve'>) => ({
          title: 'Serve',
          tabBarIcon: ({ color }) => <AntDesign name="rocket1" size={25} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign 
                name="home" 
                size={25} 
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
