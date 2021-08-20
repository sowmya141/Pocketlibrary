
import React from 'react';
import {View,Image,SafeAreaView,ScrollView,StyleSheet,Text} from 'react-native';
import { Icon} from 'react-native-elements';
import Colors from '../../constants/Colors';

const CustomHeader=(props)=>{
  return(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../../constants/images/icon2.jpg')} style={{height:120,width:120,borderRadius:60,}}/>
    </View>
    <ScrollView>
    <View>
             <View style={styles.container}>
                 <Icon style={styles.icon}
                       name='home'
                       type='ionicons'
                       color={Colors.primary}
                />
                <Text style={styles.txt}>Home</Text>
             </View>
                 <View style={styles.container}>
                <Icon style={styles.icon}
                name='add'
                type='ionicons'
                color={Colors.primary}
                />
                 <Text style={styles.txt} onPress={()=>props.navigation.navigate('AddBook')}>ADD Books</Text>
                 </View>
                    <View style={styles.container}>
             <Icon style={styles.icon}
                name='delete'
                type='ionicons'
                color={Colors.primary}
              />
                <Text style={styles.txt} onPress={()=>props.navigation.navigate('DeleteBook')}>Delete Book</Text>
                </View>
           </View>     
    </ScrollView>
    <View style={{padding:20,marginBottom:20,flexDirection:'row'}}>
   
             
   <Icon style={styles.icon}
         name='logout'
         type='ionicons'
         color={Colors.primary}
  />
  <Text style={styles.txt} onPress={()=>props.navigation.navigate('add')}>Logout</Text>

</View>
  </SafeAreaView>
  )}

  const styles=StyleSheet.create({
    imgview:{
        height:200,
        width:200,
        alignSelf:'center',
       
        padding:20
    },
    img:{
        height:'100%',
        width:'100%',
        
    },
    container:{
       
        margin:10,
        flexDirection:'row'
    },
    icon:{
       paddingHorizontal:10,
      
    },
    txt:{
        fontSize:16,
        color:Colors.accent
    },
    bottomView:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
       
        position: 'relative',
        bottom: -10
       
       
        
      },
})
export default CustomHeader