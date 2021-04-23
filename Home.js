import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home1 from "./Screens/Home1"
import Products from "./Screens/Products"
import Account from "./Screens/Account"
import Events from "./Screens/Events"
import Tutors from "./Screens/Tutors"
import { Icon } from "react-native-elements"


export default function Home() {
  const Tabs = createMaterialBottomTabNavigator()
  return (
    <Tabs.Navigator shifting={false} barStyle={{backgroundColor:'white'}}>
     <Tabs.Screen name="Home" component={Home1} options={{tabBarIcon:()=>(<Icon type="ionicon" name="home-outline"/>)}}/>
     <Tabs.Screen name="Products" component={Products} options={{tabBarIcon:()=>(<Icon type="ionicon" name="cart-outline"/>)}}/>
     <Tabs.Screen name="Events" component={Events} options={{tabBarIcon:()=>(<Icon type="ionicon" name="calendar-outline"/>)}}/>
     <Tabs.Screen name="Tutor" component={Tutors} options={{tabBarIcon:()=>(<Icon type="ionicon" name="pencil-outline"/>)}}/>
     <Tabs.Screen name="Account" component={Account} options={{tabBarIcon:()=>(<Icon type="ionicon" name="settings-outline"/>)}}/>   
    </Tabs.Navigator>
  );
}

