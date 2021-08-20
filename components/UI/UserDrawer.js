import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,SafeAreaView} from 'react-native';
import { Icon} from 'react-native-elements';
import Colors from '../../constants/Colors';


const UserDrawer=(props)=>{
    return(
       <SafeAreaView style={{flex:1}}>
        
            <View style={styles.imgview}>
                <Image style={styles.img} source={require('../../constants/images/ud2.png')}/>
            </View>
            <ScrollView >
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
                name='library-books'
                type='ionicons'
                color={Colors.primary}
                />
                 <Text style={styles.txt} onPress={()=>props.navigation.navigate('OverView')}>All Books</Text>
                 </View>
                    <View style={styles.container}>
             <Icon style={styles.icon}
                name='arrow-downward'
                type='ionicons'
                color={Colors.primary}
              />
                <Text style={styles.txt}>Downloads</Text>
                </View>
             <View style={styles.container}>
             <Icon style={styles.icon}
                name='star-rate'
                type='ionicons'
                color={Colors.primary}
                />
                <Text style={styles.txt}>Favorites</Text>
             </View>
                <View style={styles.container}>
                <Icon style={styles.icon}
                name='info'
                type='ionicons'
                color={Colors.primary}
             />
             <Text style={styles.txt}>About Us</Text>
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
    )
}

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
export default UserDrawer