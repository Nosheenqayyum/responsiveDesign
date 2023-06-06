import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../styles/colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:moderateScale(24),
    },
    imgStyle:{
        padding:moderateScale(24),        
        width:moderateScale(120),
        height:moderateScale(120)
    },
    headingText: {
        fontSize:scale(24),
        fontWeight:'bold',
        textAlign :'center',
        color:"black",
        marginTop:moderateVerticalScale(54)

    },
    descText: {
        fontSize:scale(14),
        fontWeight:'400',
        textAlign :'center',
        marginTop:moderateVerticalScale(12)
    },
    btnStyle:{
        width:moderateScale(54),
        height:moderateScale(56),
        borderRadius:moderateScale(56/2),
        alignSelf:'flex-end'
    }
   
});


export default styles