import React, { useState } from "react";
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


export default function CreatePostsScreen() {
    const [isKeabordShown, setIsKeabordShown] = useState(false);

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
                
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>

                    <View style={styles.pictureLayout} >
                        <TouchableOpacity style={styles.pictureButton} >
                            <FontAwesome name="camera" size={24} color="#bdbdbd" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.pictureUploadText} >Upload photo</Text>

                    <TextInput
                        placeholder='Title'
                        placeholderTextColor="#BDBDBD"
                        textAlign='left'
                        style={styles.titleInput}
                        onFocus={onInputFocus}
                    />

                    <TextInput
                        placeholder='Location'
                        placeholderTextColor="#BDBDBD"
                        textAlign='left'
                        style={styles.locationInput}
                        onFocus={onInputFocus}
                    />

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.loadBtn}                        
                    >
                        <Text style={styles.loadBtnText}>POST</Text>
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

    pictureLayout: {
        height: 240,
        marginBottom: 8,
        backgroundColor: '#f6f6f6',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    pictureButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "center",

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
    },

    locationInput: {
        height: 50,
        marginBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },

    loadBtn: {
        borderRadius: 100,
        // backgroundColor: '#FF6C00',
        backgroundColor: '#f6f6f6', 
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 16,
        height: 51,
    },

    loadBtnText: {
        // color: `#ffffff`,
        color: '#bdbdbd',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
    },

});