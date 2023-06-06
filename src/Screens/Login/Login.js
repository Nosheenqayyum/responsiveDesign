//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import styles from './style';
 import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';

const Login = ({navigation}) => {
    const [isVisible, setVisible] = useState(true)
    return (
   <View style={styles.container}>
     


<View>     
    <ImageBackground
        source={{uri:"https://w0.peakpx.com/wallpaper/379/11/HD-wallpaper-cute-baby-child-is-sleeping-on-light-blue-cloth-covering-with-towel-cute.jpg"}}
        style={styles.imagStyle}
    >
    <Text style={styles.loginTextStyle}>LOGIN</Text>
    </ImageBackground>
    
    <View style={styles.mainStyle} >
        <TextInputWithLabel
        label="Email Address"
        placeHolder="Enter your email"
        inputStyle={{marginBottom:moderateVerticalScale(28)}}
        keybordType='email-address'
        />
        <TextInputWithLabel
        label="Password"
        placeHolder="Enter your password"
        secureTextEntry={isVisible}
        rightIcon={isVisible? imagePath.hide: imagePath.show}
        onPressRight={()=>setVisible(!isVisible)}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.forgotView}
        onPress={()=>navigation.navigate(navigationStrings.FORGOT_PASSWORD)}
        >
            
            <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonComp
        btnText={'Login'}
        // onPress={()=> alert("in login")}
        />

     </View>
   </View>
       <View style={styles.botomView}>
        <Text>Not a member</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
            <Text>Join Now</Text>
        </TouchableOpacity>


    </View>

   </View>
   );
};



export default Login;
