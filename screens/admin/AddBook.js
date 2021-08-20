import React,{useState,useEffect,useCallback} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ScrollView,
    } from 'react-native';
import HeaderButton from '../../components/UI/HeaderButton';
import {HeaderButtons,Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import * as productsAction from '../../library/actions/Products'


const AddBook=props=>{
    const dispatch=useDispatch()
    const [title, settitle]=useState('');
    const [authorname, setauthorname]=useState('');
    const [genre, setgenre]=useState('');
    const [language, setlanguage]=useState('');
    const [imageurl, setimageurl]=useState('');
    const [details, setdetails]=useState('');
   
    const submitHandler=useCallback(()=>{
        dispatch(
            productsAction.createProduct(title,authorname,genre,language,imageurl,details)
        );
    },[dispatch,title,authorname,genre,language,imageurl,details]);
    
   
    useEffect(()=>{
        props.navigation.setParams({submit:submitHandler});
    },[submitHandler]);

    const submitfn=props.navigation.getParam('submit')
    return(
       <ScrollView>
           <View style={styles.form}>
           <View style={styles.formControl}>
               <Text style={styles.label}> Title</Text>
               <TextInput 
               style={styles.input}
               value={title}
               onChangeText={text=>settitle(text)}
               />
           </View>
           <View style={styles.formControl}>
               <Text style={styles.label}> AuthorName</Text>
               <TextInput 
                style={styles.input}
                value={authorname}
                onChangeText={text=>setauthorname(text)}/>
           </View>
           <View style={styles.formControl}>
               <Text style={styles.label}> Genre</Text>
               <TextInput 
               style={styles.input}
               value={genre}
               onChangeText={text=>setgenre(text)}/>
           </View>
           <View style={styles.formControl}>
               <Text style={styles.label}> Language</Text>
               <TextInput 
               style={styles.input}
               value={language}
               onChangeText={text=>setlanguage(text)}/>
           </View>
           <View style={styles.formControl}>
               <Text style={styles.label}> ImageURL</Text>
               <TextInput 
               style={styles.input}
               value={imageurl}
               onChangeText={text=>setimageurl(text)}/>
           </View>
           <View style={styles.formControl}>
               <Text style={styles.label}> Description</Text>
               <TextInput 
               style={styles.input}
               value={details}
               onChangeText={text=>setdetails(text)}/>
           </View>
           <View style={styles.button}>
           <Button 
            title='AddBook'
            onPress={submitfn}>

           </Button>
           </View>
           
           </View>
       </ScrollView>
    )
}
AddBook.navigationOptions=navData=>{
   return{
    headerTitle:'AddBook',
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
    form:{
        margin:20,

    },
    formControl:{
        width:'100%'
    },
    label:{
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:2
    },
    button:{
        margin:40
    },
})

export default AddBook