import React from 'react';
import {View,StyleSheet,Text,Image,TextInput,TouchableOpacity,Keyboard,TouchableWithoutFeedback,Dimensions,ScrollView} from 'react-native';
import image from '../../constants/images/r7.jpg';
import Colors from '../../constants/Colors';

import {Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


const Register=(props)=>{
  

  
  return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image source={image} style={{height:'100%',width:'100%'}}>

          </Image>
         
          <View style={styles.bottomView}>
            <Text style={styles.loginText}>Register</Text>
            <View style={styles.inputView}>
              <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color={Colors.primary}
              />
              <TextInput
              style={styles.input}
              placeholder='Username'
              autoCapitalize='none'

              />
            </View>
            <View style={styles.inputView}>
              <Icon
              style={styles.inputIcon}
              name='email'
              type='ionicons'
              color={Colors.primary}
              />
              <TextInput
              style={styles.input}
              placeholder='E-Mail'
              autoCapitalize='none'

              />
            </View>
            <View style={styles.inputView}>
              <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color={Colors.primary}
              />
              <TextInput
              style={styles.input}
              placeholder='Password'
              autoCapitalize='none'
              secureTextEntry={true}
              />
            </View>
            <View style={styles.inputView}>
              <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color={Colors.primary}
              />
              <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              autoCapitalize='none'

              />
            </View>
            
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   },
   titleText:{
    position:'absolute',
    top:Dimensions.get('screen').height*0.1,
    alignSelf:'center',
    color:'#fff',
    fontFamily:'Georama-Italic',
    fontSize:50,
    elevation:16
   },
   bottomView:{
    backgroundColor:'#fff',
    opacity:0.94,
    position:'absolute',
    borderRadius:30,
     top:130,
    left:10,
    right:10,
    paddingTop:10,
    paddingBottom:20,
    paddingHorizontal:20
   },
   loginText:{
    fontFamily:'Georama-Medium',
    fontSize:24,
    marginTop:12,
    marginBottom:4
   },
   inputView:{
      height:50,
      borderRadius:10,
      backgroundColor:'#f1f3f6',
      marginTop:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
   },
   inputIcon:{
    paddingHorizontal:8
   },
   input:{
    height:40,
    flex:1,
    fontSize:18,
    color:'#333'
   },
   loginButton:{
    backgroundColor:Colors.accent,
    paddingVertical:10,
    borderRadius:8,
    marginTop:10
   },
   loginButtonText:{
    color:'#fff',
    alignSelf:'center',
    fontSize:18
   },
   registerText:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:4,
    fontSize:16,
    fontFamily:'Georama-Medium'
   },
   fpText:{
    marginTop:10,
    alignSelf:'flex-end',
    fontSize:16,
    color:Colors.primary
   }
})
export default Register;
