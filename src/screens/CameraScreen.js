import React, { Component } from 'react';
  import { StyleSheet, Dimensions, Text, View } from 'react-native';
  import { RNCamera } from 'react-native-camera';

  export default class CameraScreen extends Component {
    takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        console.log(data.uri);
      }
    };

    render() {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={cam => { this.camera = cam }}
            style={styles.preview}
            >
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE CARD]</Text>
          </RNCamera>
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
    preview: { 
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });