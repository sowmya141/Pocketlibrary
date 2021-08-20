import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button, Dimensions,ImageBackground} from 'react-native';
const{width:WIDTH}=Dimensions.get('window');

export class AdminLogin extends Component{
    state={
        request:{
            UserName:'',
            Password:''
        }
    }
    show=()=>{
        this.props.navigation.navigate('app')
    }
    fetchData=(key,value)=>{
        let request=this.state.request;
        request[key]=value;
        request['UserName']=value;
        this.setState({request:request});
    }
    handleData=(key,value)=>{
        let request=this.state.request;
        request[key]=value;
        request['Password']=value;
        this.setState({request:request});
    }
   
    render(){
        return(
            <ImageBackground source={require('../../constants/images/p6.jpg')} style={styles.img}>
            <View style={styles.container}>
                <Text style={styles.textstyle}>
                    Login Page
                </Text>
                <TextInput
                    style={styles.textbox}
                    placeholder='UserName'
                    placeholderTextColor='white'
                    value={this.state.request.UserName}
                    onChangeText={(value)=>this.fetchData('UserName',value)}
                />
                 <TextInput
                    style={styles.textbox}
                    placeholder='Password'
                    placeholderTextColor='white'
                    value={this.state.request.Password}
                    onChangeText={(value)=>this.handleData('Password',value)}
                />
                <Button onPress={()=>this.On_Click_btn()}
                    style={styles.buttonstyle}
                    
                    title='Login'
                />
            </View>
            </ImageBackground>
        )
    }
    On_Click_btn=()=>{
        if((this.state.request.UserName=='Admin')&&(this.state.request.Password=='admin'))
        {
            alert('Registration Success');
            <View>
                <Button onPress={this.show()}>

                </Button>
            </View>
    
        }
        else if((this.state.request.UserName=='')||(this.state.request.Password=='')){
                alert('Both Inputs are Required')
        }
        else if((this.state.request.UserName!='Admin')||(this.state.request.Password!='admin')){
            alert('Wrong Username or Password')
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',
        width:null,
        opacity:0.8,
    },
    textstyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    textbox:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        borderWidth:2,
        backgroundColor:'rgba(0,0,0,0.35)',
        marginHorizontal:25,
        marginVertical:15
    },
    buttonstyle:{
        marginVertical:20
    }
})
