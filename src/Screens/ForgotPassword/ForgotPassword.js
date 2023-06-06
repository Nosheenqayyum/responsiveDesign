//import liraries
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Button } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const ForgotPassword = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        console.log('event trigger on show', event);
        setKeyboardHeight(event.endCoordinates.height -300);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (event) => {
        console.log('event trigger on hide', event);
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderComp />

        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.2,
              alignItems: 'center',
              paddingTop: moderateScale(62),
            }}>
            <Image
              style={styles.imgStyle}
              source={require('../../assests/images/forgot.png')}
            />
          </View>

          <View style={{ flex: 0.4 }}>
            <Text style={styles.headingText}>Forgot Password</Text>

            <Text style={styles.descText}>
              Enter the email address associated with your account.
            </Text>
          </View>

          <View style={{ flex: 0.4, marginBottom: keyboardHeight }}>
            <TextInputWithLabel
              label="Email"
              placeHolder="Enter your email"
              inputStyle={{ marginBottom: moderateVerticalScale(28) }}
              keyboardType="email-address"
            />
            <ButtonComp
              btnText={'Send'}
              onPress={() =>
                navigation.navigate(navigationStrings.SET_PASSWORD)
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ForgotPassword;
