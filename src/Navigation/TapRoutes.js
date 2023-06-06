import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Profile,Booking} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale } from 'react-native-size-matters';


const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
      <BottomTab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor:colors.black,
        tabBarActiveTintColor:colors.themeColor
      }}
      >
        <BottomTab.Screen name={navigationStrings.HOME} component={Home}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image style={{
                tintColor: focused?colors.themeColor:colors.blackOpacity50,
                width:moderateScale(32),height:moderateScale(32),              
                }}
                 source={imagePath.home}/>
            )
          }
        }}
         />
        <BottomTab.Screen name={navigationStrings.BOOKING} component={Booking} 
           options={{
          tabBarIcon:({focused})=>{
            return(
              <Image style={{
                tintColor: focused?colors.themeColor:colors.blackOpacity50,
                width:moderateScale(32),height:moderateScale(32),     
                 }} 
                source={imagePath.booking}/>
            )
          }
        }}
        />
        <BottomTab.Screen name={navigationStrings.PROFILE} component={Profile} 
           options={{
          tabBarIcon:({focused})=>{
            return(
              <Image style={{
                tintColor: focused?colors.themeColor:colors.blackOpacity50,
                width:moderateScale(32),height:moderateScale(32),
              }} source={imagePath.profile}/>
            )
          }
        }}
        />
      </BottomTab.Navigator>
  );
}