import React from 'react';
import {View,Text,StyleSheet,Image,Button,ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
const Details=props=>{
    //to get productId from Delete book to display details there
    const productId=props.navigation.getParam('productId');
    const selectedProduct=useSelector(state=>state.products.availableBooks.find(prod=>prod.id===productId))
    return(
        <ScrollView>
            <View style={styles.container}>
            <Image style={styles.image} source={{uri:selectedProduct.imageurl}}/>
           
            </View>
            <View>

         
            <Text style={styles.descrption}>Title:{selectedProduct.title}</Text>
            <Text style={styles.descrption}>Author:{selectedProduct.authorname}</Text>
            <Text style={styles.descrption}>Genre:{selectedProduct.genre}</Text>
            <Text style={styles.descrption}>Language:{selectedProduct.language}</Text>
            <Text style={styles.descrption}>Description:{selectedProduct.details}</Text>
            </View>
        </ScrollView>
    )
}
Details.navigationOptions=navData=>{
    return{
        headerTitle:navData.navigation.getParam('productTitle')
    }
}

const styles=StyleSheet.create({
    container:{
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:500,
        margin:15
    },
    image:{
        width:'100%',
        height:'100%'
    },
    descrption:{
        fontSize:18,
        textAlign:'center',
        marginVertical:10,
        marginHorizontal:20
    }
})
export default Details