import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE6C5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE6C5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE6C5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class MySwiper extends Component {
  render(){
      console.log(this.props.handleOnPress);
    return (
      <Swiper style={styles.wrapper} showsButtons={this.props.showsButtons} loop={this.props.loop}>
        <View style={styles.slide1}>
          <Image source={require('../assets/images/robot-dev.png')}/>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../assets/images/robot-prod.png')}/>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Image source={require('../assets/images/robot-dev.png')}/>
          <Text style={styles.text}>Let's get started!</Text>
          <TouchableOpacity onPress={this.props.handleOnPress} style={styles.helpLink}>
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </Swiper>
    );
  }

}