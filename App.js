

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Camera from 'react-native-camera';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  clickme(){
    alert("was touched");

  }

  render() {
    return (
      <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
      onBarCodeRead={this.onBarCodeRead.bind(this)}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <TouchableHighlight onPress = {this.clickme.bind(this)}>
              <View> style = {{height:50, width:50, backgroundColor:"white"}}</View>
            </TouchableHighlight>
          </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
