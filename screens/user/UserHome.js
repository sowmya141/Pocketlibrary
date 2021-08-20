import React,{useState} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors'
import {SearchBar} from 'react-native-elements';
import Slider from '../../components/UI/Slider';
import SmallImage from '../../components/UI/SmallImage';

const images = [
    'https://images-na.ssl-images-amazon.com/images/I/81Lk9XLfeDL.jpg',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/36364/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ]

const UserHome=(props)=>{
    
    return(
        <ScrollView>
        <View>
        <SearchBar
            placeholder='Search here..'
            inputContainerStyle={{backgroundColor:'white'}}
            containerStyle={{backgroundColor:Colors.accent}}
        />
       <Slider images={images}/>
      
        </View>
        </ScrollView>
        )
    }   


UserHome.navigationOptions=navData=>{
    return{
     headerTitle:'Pocket Library',
     headerLeft:()=>(
     <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item
             title='Menu'
             iconName='md-menu'
             color='black'
             onPress={()=>{
                 navData.navigation.toggleDrawer()
             }}
         />
 
     </HeaderButtons>
     )
     }
 }


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default UserHome;
/*
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const UserHome=()=>{
    return(
        <View style={styles.container}>
            <Text>UserHome Screen</Text>
           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default UserHome;*/