//import liraries
import React from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableOpacity, Input } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../styles/colors';


// create a component
const TextInputWithLabel = ({
    label,
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
  
    return (
        <View style={{...styles.inputStyle, ...inputStyle}}>
    <Text style={styles.labelTextStyle}>{label}</Text>
    <View style={styles.flexView}>
    <TextInput 
    placeholder={placeHolder}
    style={styles.inlineStyle}
    {...props}
/>
{!!rightIcon?<TouchableOpacity
activeOpacity={0.8}
onPress={onPressRight}
>
<Image source={rightIcon}
    style={{tintColor:colors.blackOpacity30,width:22,height:22}}
/>
</TouchableOpacity>:null}

</View>
    </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    inputStyle:{
        borderBottomWidth:1,
        borderBottomColor: colors.borderColor,
        borderRadius: moderateScale(4),
    },
    inlineStyle: {
            padding:moderateVerticalScale(8),
            fontSize: scale(16),
            color: colors.blackOpacity80,
            flex:1
            
    },
    labelTextStyle: {
        fontSize: scale(14),
        color: colors.blackOpacity50,
    },
    flexView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});

export default TextInputWithLabel;
