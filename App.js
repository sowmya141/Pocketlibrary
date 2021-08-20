import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productreducers from './library/reducers/Products';
import ProductNavigation from './navigation/BookNavigation'



const rootReducer=combineReducers({
  products:productreducers
});

const store=createStore(rootReducer)


export default function App(){
  
  return(
    <Provider store={store}>
    <ProductNavigation/>
  </Provider>
  )
 
}



