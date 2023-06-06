//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Button } from 'react-native/Libraries/Components/Button';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


// create a component
const  Register = ({navigation}) => {
    const [isTrue, setTrue] = useState(false)
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
        <HeaderComp
        /> 

<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row"}}>
       <TextInputWithLabel
        label="First Name"
        placeHolder="Please enter your first name"
        inputStyle={{flex:1}}
        />
<View style={{marginHorizontal:moderateScale(8)}}></View>
       <TextInputWithLabel
        label="Last Name"
        placeHolder="Please enter your last name"
        inputStyle={{flex:1}}
        />
        </View>
       

        <TextInputWithLabel
        label="Salon Name"
        placeHolder="Please enter your last name"
        inputStyle={{marginVertical:moderateVerticalScale(28) }}
        />

       <TextInputWithLabel
        label="Date of birth"
        placeHolder="Please enter your dob"
        inputStyle={{marginVertical:moderateVerticalScale(28) }}
        />

        <TextInputWithLabel
        label="Phone Number"
        placeHolder="Please enter your phone number"
        inputStyle={{marginVertical:moderateVerticalScale(28) }}
        />
       
       <TextInputWithLabel
        label="Email"
        placeHolder="Enter your email"
        inputStyle={{marginBottom:moderateVerticalScale(28)}}
        keybordType='email-address'
        />

<View style={{flexDirection:"row"}}>
       <TextInputWithLabel
        label="Country"
        placeHolder="Please enter your country"
        inputStyle={{flex:1}}
        />
<View style={{marginHorizontal:moderateScale(8)}}></View>
       <TextInputWithLabel
        label="Postal/Zip Code"
        placeHolder="Please enter your Postal/Zip Code"
        inputStyle={{flex:1}}
        />
        </View>
        
        <TextInputWithLabel
        label="Address"
        placeHolder="Please enter your address"
        inputStyle={{marginVertical:moderateVerticalScale(28) }}
        />

        
<TextInputWithLabel
        label="Refferal code"
        placeHolder="Please enter your code "
        // inputStyle={{marginVertical:moderateVerticalScale(28) }}
        />

<TouchableOpacity 
style={styles.bottomView}
activeOpacity={0.8}
onPress={()=>setTrue(!isTrue)}
>
<Image source={isTrue? imagePath.activeCheck:imagePath.inActiveCheck} 
    style={{margin:moderateScale(12),height:32,width:32
}}
/>
    <Text>By Logging in, you agree to NOOVVOO's Privacy and Terms of Use</Text>
</TouchableOpacity>



        <ButtonComp 
            btnText={"Continue"}
            onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)}
            btnStyle={{marginVertical:moderateVerticalScale(32)}}

        />

        </KeyboardAwareScrollView>
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default Register;
