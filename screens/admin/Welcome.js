import React from 'react';
import {View,Text,StyleSheet,Image } from 'react-native';
import HeaderButton from '../../components/UI/HeaderButton';
import {HeaderButtons,Item } from 'react-navigation-header-buttons';

const Welcome=(props)=> {
    return(
      <View style={styles.container}>
       <Image source={require('../../constants/images/user2.png')} style={styles.image}/>
        <Text style={{fontSize:20}}>
          Welcome Admin!!
        </Text>
      </View>
    )
      
    }
  


    Welcome.navigationOptions=navData=>{
      return{
       headerTitle:'Welcome Admin',
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
       justifyContent:'center',
       alignItems:'center'
     },
     image:{
       height:120,
       width:120,
       borderRadius:20
     }
   })
export default Welcome