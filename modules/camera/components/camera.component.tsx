import React, { Component } from 'react';
/* Common */
import { CommonComponent } from '@common/component/common.component';
import { State } from '@common/component/common.state';
import { Props } from '@common/component/common.props';
import {
  StyleSheet
} from 'react-native';
import { CameraKitCamera, CameraKitGalleryView, ALBUM_NAME, MAINTAIN_SELECETED_IMAGES } from 'react-native-camera-kit';


import { Button, View, Text, Icon } from '@shoutem/ui';

export class Camera extends React.Component<State, Props> implements CommonComponent {

    props : any;
    state : any;
    camera : any;
    gallery : any;

    constructor (props: any) {
        super(props);
        this.props = props;
    }

   
    public onLocationRequest () {
        console.log("here");
    }

    

    public setComponentState(state: any) {
        super.setState(state);
    }

    public takePicture = async() => {
        if (this.camera) {
          let images = await this.camera.capture(true);
        } 
    };

    public render() {
        return (
        <View styleName="h-center">
               
        </View>
        );
        
    }

    private renderCamera () {
        return (
            <View>
                    <CameraKitCamera
                        ref={(cam : any) => this.camera = cam}
                        style={{
                            flex: 1,
                            backgroundColor: 'white'
                        }}
                        cameraOptions={{
                            flashMode: 'auto',             // on/off/auto(default)
                            focusMode: 'on',               // off/on(default)
                            zoomMode: 'on',                // off/on(default)
                            ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
                            ratioOverlayColor: '#00000077' // optional
                        }}
                        onReadQRCode={(event : any) => console.log(event.nativeEvent.qrcodeStringValue)} // optional   
                    />
                    <Button onPress={this.takePicture} styleName="secondary">
                        <Icon name="take-a-photo" />
                        <Text>Camera</Text>
                    </Button>
            </View>
        )
    }

    private renderGallery () {
        return (
            <View>
                <CameraKitGalleryView
                    ref={(gallery : any) => this.gallery = gallery}
                    style={{flex: 1, marginTop: 20}}
                    minimumInteritemSpacing={10}
                    minimumLineSpacing={10}
                    albumName={""}
                    columnCount={3}
                    onTapImage={(event : any) => {
                        // event.nativeEvent.selected - ALL selected images ids
                    }}
                    selectedImages={[]}
                    selectedImageIcon={require('<IMAGE_FILE_PATH>')}
                    unSelectedImageIcon={require('<IMAGE_FILE_PATH>')}
                />
            </View>
        )
    }
   
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});