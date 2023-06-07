//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';

// create a component
const HeaderComp = ({
    onPressBack

}) => {
    const navigation = useNavigation();    
    
    const goBack =() =>{
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
        <TouchableOpacity
        onPress={!!onPressBack? onPressBack: ()=> goBack()}
        >
            <Image source={imagePath.icBack} />
        </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       alignContent:'center',
       height: moderateScale(40),
       marginTop:22
    },
});

//make this component available to the app
export default HeaderComp;
