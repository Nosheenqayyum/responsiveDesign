//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,SafeAreaView,Image } from 'react-native';
import { moderateScale, moderateVerticalScale,scale } from 'react-native-size-matters';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import dummyData from './dummyData';
import styles from './style';


// create a component
const Home = () => {

   const renderItem= ({item}) =>{
    console.log("item_+++",item)
    return(
        <View style={styles.flatStyle}>
        <View style={styles.flexView}>
        <View>
        <Text style={{
            fontSize:scale(12),
            color:colors.blackOpacity80
        }}
        >{!!item?.date? item.date.date: ''}</Text>  
        {/* {!!item?.date.date? 'true':'false'} */}
     {/* {item?.date || 'date not found'} */}
      <Text style={{
            fontSize:scale(14),
            color:colors.black,
            fontWeight:'bold',
            marginTop:moderateVerticalScale(12)
        }}
        >{item?.name}</Text>

<View style={{
    flexDirection:'row',
    alignItems:'center'
}}>
<Image  
        style={{
        width:moderateScale(14),
        height:moderateVerticalScale(14),
        tintColor: colors.blackOpacity50,
        }}
        source={imagePath.location}/>
        <Text style={{
            fontSize:scale(14),
            color:colors.blackOpacity50,
        }}
        >  {item?.address}
        </Text>
</View>
        </View>
        <Image
        style={styles.imgStyle}
        source={require('../../assests/images/profile.jpg')}
      />
        </View>

        <View style={{...styles.flexView,marginVertical:moderateVerticalScale(8)}}>
            <Text 
            style={{
            fontSize:scale(14),
            color:colors.black,
            textTransform:'uppercase',
            }}>price</Text>
            <Text
            style={{
            fontSize:scale(14),
            color:colors.Black,
            fontWeight:'bold',
            }}
            >{item?.price}</Text>
        </View>

        <View style={styles.flexView}>
           <View style={{flex: 1}}>
            <ButtonComp
                btnText={'Reject'}
                btnStyle={{
                    backgroundColor:colors.white,
                    borderWidth:1,
                    borderColor: colors.themeColor,
                }}
                btnTextStyle={{
                    color: colors.themeColor
                    }}
            />
            </View>
            <View style={{marginHorizontal:moderateScale(8)}}></View>
            <View style={{flex: 1}}>
            <ButtonComp
                btnText={'Accept'}
            />
            </View>
        </View>
        </View>
    )
   }

    return (
        <View style={styles.container}>
        
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
        <View style={styles.headerStyle}>
           <Text/>
            <Text style={styles.headerText}>Nanny Line</Text>
            <Image 
            style={{width:moderateScale(20),height:moderateVerticalScale(20)}}
            source={imagePath.notification} />
        </View>
          
          <View style={{
            marginTop:moderateVerticalScale(14),
            marginHorizontal:moderateScale(16),
            flex:1
            }}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={dummyData}
            renderItem={renderItem}
            ItemSeparatorComponent={()=><View style={{marginBottom:moderateVerticalScale(16)}}/>}


           />
           </View>
           </SafeAreaView>
        </View>
    );
};


//make this component available to the app
export default Home;
