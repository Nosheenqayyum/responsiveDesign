//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Button } from 'react-native/Libraries/Components/Button';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


// create a component
const  SetPassword = ({navigation}) => {
    const [isTrue, setTrue] = useState(false)
    const [isVisible, setVisible] = useState(true)


    
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
        <HeaderComp
        /> 

<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
<View style={{alignItems:'center'}}>  
        <Image
        style={styles.imgStyle}
        source={require('../../assests/images/setpas.png')}
      />
<Text style={styles.headingText}>Set Password</Text>
<Text style={styles.descText}>Set a password for your new account <Text style={{fontFamily:"bold", color:"black"}}>(+33) 34 56 78 901</Text> </Text>
      </View>

<TextInputWithLabel
        label="Password"
        placeHolder="Enter your password"
        secureTextEntry={isVisible}
        rightIcon={isVisible? imagePath.hide: imagePath.show}
        onPressRight={()=>setVisible(!isVisible)}
        inputStyle={{marginVertical:moderateVerticalScale(76)}}

        />




        <ButtonComp 
            btnText={"Continue"}
            onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)}
            btnStyle={styles.btnStyle}
            img={imagePath.icForward}

        />

        </KeyboardAwareScrollView>
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default SetPassword;
