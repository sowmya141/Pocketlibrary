
import React, { useEffect, useState } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  ScrollView
} from 'react-native';
import Data from '../../data/Data';

const SmallImage = () => {



  return (
    
      <FlatList style={{ margin: 5, }} 
        data={Data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.context}>
            <Image style={{ height: 100, width: 200, }} source={{ uri: item.imageurl }}  />
            </View>
            <View style={styles.txtview}>
                <Text style={styles.txt}>{item.title}</Text>
              </View>
          

          </View>

        )}
        //Setting the number of column
        numColumns={2}

      />

   
  );
};
export default SmallImage;

const styles = StyleSheet.create({
  context: {
    flex: 1 / 2,
    flexDirection: 'column',
    margin: 1,
    opacity: 0.6
  },
  txtview: {
    position: 'absolute',
    bottom: 0,
    right:4
  },
  txt: {
    color: 'black',
    fontSize: 22,
    fontFamily:'Roboto-BoldItalic'
  }
});