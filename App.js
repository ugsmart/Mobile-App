import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./Login"
import Signup from "./Signup"
import Intro from "./Intro"
import Home from "./Home"
import { useFonts } from "expo-font"

export default function App() {
  const[loaded] = useFonts({
    Acolo: require("./fonts/Aclonica-Regular.ttf"),
    Ranch: require("./fonts/Rancho-Regular.ttf"),
    Titan: require("./fonts/TitanOne-Regular.ttf"),
    Noto: require("./fonts/NotoSansJP-Regular.otf")
  })
  if(!loaded){
    return null;
  }
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" options={{headerTitle:null,headerStyle:{elevation:0}}} component={Intro}/>
        <Stack.Screen name="Login" options={{headerTitle:null,headerStyle:{elevation:0}}} component={Login}/>
        <Stack.Screen name="Home" options={{headerStyle:{elevation:0}}} component={Home}/>
        <Stack.Screen name="Signup" options={{headerTitleAlign:'center',headerTitle:null,headerStyle:{elevation:0}}} component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

