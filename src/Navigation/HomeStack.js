import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TapRoutes';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return(
         <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
         </Stack.Navigator>
  )
}
