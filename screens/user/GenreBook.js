import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const GenreBook=(props)=>{
    return(
        <View style={styles.container}>
            <Text>GenreBook Screen</Text>
            <Button title='Details'
                    onPress={()=>{props.navigation.navigate('Details')}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default GenreBook;