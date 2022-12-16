import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,    
    TouchableOpacity,
    TextInput,
    Keyboard,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";


export default function CreatePostsScreen({ navigation }) {
    const [isKeabordShown, setIsKeabordShown] = useState(false);
    // const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [photoUri, setPhotoUri] = useState('');
    const [title, setTitle] = useState('');
    const [disposition, setDisposition] = useState('');
    const [location, setLocation] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //     const { status } = await Camera.getCameraPermissionsAsync();
    //     await MediaLibrary.requestPermissionsAsync();

    //     setHasPermission(status === "granted");
    //     })();
    // }, []);

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    async function getLocation() {
        // let { status } = await Location.requestBackgroundPermissionsAsync();
        // if (status !== "granted") {
        //     alert("Permission to access location was denied");
        // }

        let location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        setLocation(coords);
    }

    const takePhoto = async () => {
        getLocation();
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setPhotoUri(uri); 
    }

    const createAndLoadPostData = async () => {        
        const photoData = { photoUri, title, disposition, location };
        setPhotoUri('');
        setTitle('');
        setDisposition('');
        setLocation(null);
        // console.log("photoData", photoData);
        navigation.navigate("PostsScreen", { photoData });
    }

    function onInputFocus() {
        setIsKeabordShown(true);
    }

    function hideKeaboard() {
        setIsKeabordShown(false);
        Keyboard.dismiss();
    }
    
    return (
        <TouchableWithoutFeedback onPress={hideKeaboard}>
      
            <View style={styles.container}>
                
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

                    <Camera
                        style={styles.camera}
                        ref={(ref) => { setCameraRef(ref) } }
                    >
                        <TouchableOpacity activeOpacity={0.6} style={styles.pictureButton} onPress={takePhoto} >
                            <FontAwesome name="camera" size={24} color="#bdbdbd" />
                        </TouchableOpacity>
                    </Camera>                    

                    <Text style={styles.pictureUploadText} >Upload photo</Text>

                    <TextInput
                        placeholder='Title'
                        placeholderTextColor="#BDBDBD"
                        textAlign='left'
                        style={styles.titleInput}
                        value={title}
                        onFocus={onInputFocus}
                        onChangeText={(value) => setTitle(value)}
                    />

                    <TextInput
                        placeholder='Disposition'
                        placeholderTextColor="#BDBDBD"
                        textAlign='left'
                        style={styles.dispositionInput}
                        value={disposition}
                        onFocus={onInputFocus}
                        onChangeText={(value) => setDisposition(value)}
                    />

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{...styles.loadBtn,  backgroundColor: photoUri ? '#ff6c00' : '#f6f6f6'}}
                        onPress={createAndLoadPostData}
                    >
                        <Text style={{...styles.loadBtnText, color: photoUri ? '#ffffff' : '#bdbdbd'}}>PUBLISH POST</Text>
                    </TouchableOpacity>
                    

                </KeyboardAvoidingView>
                
            </View>
            
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,        
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',
    },

    camera: {
        height: 240,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    pictureButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.3,

    },

    pictureUploadText: {
        marginBottom: 32,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: '#bdbdbd',
    },

    titleInput: {
        height: 50,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },

    dispositionInput: {
        height: 50,
        marginBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },

    loadBtn: {
        borderRadius: 100, 
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 16,
        height: 51,
    },

    loadBtnText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
    },

});