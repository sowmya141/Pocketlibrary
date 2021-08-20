import React, { Component } from "react";
import { View, Image, Dimensions, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";

const { width } = Dimensions.get('window');
const height = width * 0.6;


export default class Slider extends Component{
  state={
    active:0
  }
   change=({nativeEvent})=>{
    const  slide= Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide!==this.state.active){
      this.setState({active:slide});
  }
}
  
  render(){
    return (
      <View style={styles.container}>
        <ScrollView pagingEnabled horizontal
        onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          {
            this.props.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.imges} />
            ))
          }
  
        </ScrollView>
        <View style={styles.dotview}>
          {
            this.props.images.map((i,k)=>(
              <Text key={k} style={k==this.state.active? styles.dotactvclr: styles.dotclr}> ⬤ </Text>
            ))
          }
          
        </View>
      </View>
    )
  }
 
}
const styles = StyleSheet.create({
  container: {
    width,
    height
  },
  imges: {
    width,
    height,
    resizeMode: 'cover'
  },
  dotview: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  dotclr:{
     color: '#888' ,
    margin:3
    },
    dotactvclr:{
      color: 'white' ,
       margin:3,
       fontSize:(width/30)
     },
})
