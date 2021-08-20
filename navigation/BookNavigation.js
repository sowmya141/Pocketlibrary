import React from 'react'
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Add from '../screens/admin/Add';
import { AdminLogin } from '../screens/admin/AdminLogin';
import Welcome from '../screens/admin/Welcome';
import AddBook from '../screens/admin/AddBook';
import  DeleteBook from '../screens/admin/DeleteBook';

import Register from '../screens/user/Register';
import UserLogin from '../screens/user/UserLogin'; 
import UserHome from '../screens/user/UserHome';
import Favorites from '../screens/user/Favorites';
import BookDetails from '../screens/user/BookDetails';
import BooksOverview from '../screens/user/BooksOverview';
import GenreBook from '../screens/user/GenreBook'

import CustomHeader from '../components/UI/CustomHeader';
import UserDrawer from '../components/UI/UserDrawer';
import UserTab from '../components/UI/UserTab';
import Details from '../screens/admin/Details';
import Colors from '../constants/Colors';

const Adnav=createStackNavigator({
    Add:Add,
})

const WelcomeNav=createStackNavigator({
    welcome:Welcome,
    AddBook:AddBook,
    DeleteBook:DeleteBook,
    Details:Details
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary
        },
        headerTintColor:'white'
    }
})

const DrawNavigator=createDrawerNavigator({
    Welcome:WelcomeNav,
       
},{
    contentComponent:CustomHeader,
    contentOptions:{
        activeTintColor:'green'
    }
        
});

const Auth =createStackNavigator({
   Login:AdminLogin,
   
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary
        },
        headerTintColor:'white'
    }
});


const userHomeNav=createStackNavigator({
   
    Home:UserHome,
    OverView:BooksOverview,
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontFamily:'Georama-Italic',
            alignSelf:'center'
        }
    }
})

const UserDraw=createDrawerNavigator({
    userdrawhome:userHomeNav
},{
    contentComponent:UserDrawer
});

const UserTabs=createBottomTabNavigator({
    Home:{  
        screen:UserDraw,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          ),
          tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }  
        }  
      },
      Favorites: {  
        screen:Favorites,  
        navigationOptions:{  
          tabBarLabel:'Favorites',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-heart" color={tintColor} size={25} />  
          ) ,
          tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
          }
        }  
      },  
    },  
    {  
      initialRouteName: "Home"  
    },  
);  

const UserAuth=createStackNavigator({
    UserLogin:UserLogin,
    Register:Register,
});

const MainNavigator=createSwitchNavigator({
    add:Adnav,
    auth:Auth,
    app:DrawNavigator,
    uauth:UserAuth,
    draw:UserTabs,
},{
    initialRouteName:'add'
})


export default createAppContainer(MainNavigator)