import React from 'react';
import {FlatList,Text} from 'react-native';
//import { Item } from 'react-navigation-header-buttons';
import {useSelector,useDispatch} from 'react-redux';
import HeaderButton from '../../components/UI/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import ProductItem from '../../components/shop/ProductItem';
import * as ProductActions from '../../library/actions/Products'

const DeleteBook=(props)=>{
    const products=useSelector(state=>state.products.userBooks)
       const dispatch=useDispatch();
    return(
    <FlatList data={products} 
    keyExtractor={Item=>Item.title}
     renderItem={itemData=>
     <ProductItem
     id={itemData.item.id}
     image={itemData.item.imageurl}
     title={itemData.item.title}
     language={itemData.item.language}
     onViewDetail={()=>{props.navigation.navigate('Details',{
         productId:itemData.item.id,
         productTitle:itemData.item.title
        })}}
     onDelete={()=>{
        dispatch(ProductActions.deleteProduct(itemData.item.id))
     }}
     ></ProductItem>}>
    </FlatList>
    );
};
 DeleteBook.navigationOptions=(navData)=>{
     return{
        headerTitle:'Books',
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
    
 }; 

export default DeleteBook;