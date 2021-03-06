import React from 'react';
import { View,Text,Image,StyleSheet,Button ,TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native';
import Colors from '../../constants/Colors';
const ProductItem=(props)=>{
    let TouchableCmp=TouchableOpacity;

    if (Platform.OS==='android'&& Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return(
        <View style={styles.product}>
            <View style={styles.touchable}>
        <TouchableCmp  onPress={props.onViewDetail} useForeground>
        <View>
      
        
            <View style={styles.imagecontainer}>
            <Image style={styles.image} source={{uri:props.image}}/>
           
            </View>
           <View style={styles.details}>
           <Text style={styles.title}>{props.title} </Text>
            <Text style={styles.price}>{props.language}</Text>
      
           </View>
           
        <View style={styles.actions}> 
            <Button color={Colors.primary} 
                    title='View Details'
                    onPress={props.onViewDetail}/>
            <Button color={Colors.primary}
                    title='Delete' 
                    onPress={props.onDelete}/>
        </View>
        </View>
        </TouchableCmp>
        </View>
     </View>
     
    )
}
const styles=StyleSheet.create({
product:{
    elevation:5,
    borderRadius:10,
    backgroundColor:'white',
    height:400,
    margin:20
},
touchable:{
    overflow:'hidden',
    borderRadius:10
},
imagecontainer:{
    width:'100%',
    height:'75%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden'
},
image:{
    width:'100%',
    height:'100%'
},
details:{
    alignItems:'center',
    height:'15%',
    padding:10
},
title:{
    fontSize:18,
    marginVertical:2
},
price:{
    fontSize:14,
    color:'#888'
},
actions:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
height:'10%',
paddingHorizontal:20
}
});

export default ProductItem;