import React from 'react';
import {View,Text,StyleSheet,FlatList,Touchable,TouchableOpacity} from 'react-native';
import {useDispatch,useSelector } from 'react-redux';
import * as productActions from '../../library/actions/Products';
import {SearchBar} from 'react-native-elements'
import Colors from '../../constants/Colors';
import SmallImage from '../../components/UI/SmallImage';

const BooksOverview=(props)=>{
    const books=useSelector(state=>state.products.availableBooks)
    return(
       <TouchableOpacity>
             <SmallImage />
       </TouchableOpacity>
             
  
      
       
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    genre:{
     
        margin:50,
        padding:20,
      
    }
})
export default BooksOverview;