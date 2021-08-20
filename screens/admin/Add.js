


import React,{Component} from 'react';
import {View,Text,StyleSheet,Button, Dimensions} from 'react-native';
const{width:WIDTH}=Dimensions.get('window');

const Add =(props)=>{
     return(
           <View style={styles.container}>
               <View  style={styles.buttonstyle}>
                    <Button onPress={()=>props.navigation.navigate('auth')}
                    title='Admin Login'
                />
                </View>
                 <Button onPress={()=>props.navigation.navigate('uauth')}
                   
                    
                    title='User Login'
                />
                 
            </View>
           
        )
    }


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    
    textstyle:{
        fontSize:20,
        fontFamily:'Roboto-Medium',
        color:'black'
    },
   
    buttonstyle:{
        marginVertical:20,
    }
})

export default Add