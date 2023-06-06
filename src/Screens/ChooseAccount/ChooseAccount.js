//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Button } from 'react-native/Libraries/Components/Button';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';
// import { useNavigation } from '@react-navigation/native';




const ChooseAccount = ({navigation}) => {
  // const navigation= useNavigation()
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{paddingHorizontal:moderateScale(24)}}></View>
        <HeaderComp/> 

        <View style={styles.container}>
        <Text style={styles.headingText}>Choose your account type</Text>   
        <View style={{alignItems:'center'}}>  
        <Image
        style={styles.imgStyle}
        source={require('../../assests/images/house.png')}
      />
       <Text style={styles.textStyle}>Agency</Text> 
      </View>
       
      <View style={{alignItems:'center'}}>  
        <Image
        style={styles.imgStyle}
        source={require('../../assests/images/man.png')}
      />
       <Text style={styles.textStyle}>Freelancer</Text> 
      </View>
        <ButtonComp 
            btnText={"Continue"}
            btnStyle={{
                width:'100%'
            }}
            onPress={()=>navigation.navigate(navigationStrings.REGISTER)}
        />
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default ChooseAccount;
