import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const initialEmail = '';
const initialPassword = '';

const loadFonts = async () => {
    await Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),    
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function LoginScreen({ onInputFocus, hideKeaboard }) {
    const [visualPassword, setVisualPassword] = useState(true);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPassword);
    const [isReady, setIsReady] = useState(false);    

    function onPressTogglePasswordVisualisation() {
        setVisualPassword(!visualPassword);        
    }

    function onPressSubmitButton() {        
        hideKeaboard();
        
        setEmail(initialEmail);
        setPassword(initialPassword);
        
        console.log("LOGIN", email);
        console.log("LOGIN", password);
    }

    if (!isReady) {
        return (<AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)} />);
    }
  
    return (
        <View style={styles.form}>       

            <Text style={styles.title}>LOGIN</Text>
            
            <TextInput
                placeholder='Email'
                placeholderTextColor="#BDBDBD"
                textAlign='left'
                style={styles.loginInput}
                value={email}
                onFocus={onInputFocus}
                onChangeText={(value) => setEmail(value)} />
            
            <TextInput
                placeholder='Password'
                placeholderTextColor="#BDBDBD"
                secureTextEntry={visualPassword}
                textAlign='left'
                style={styles.passwordInput}
                value={password}
                onFocus={onInputFocus}
                onChangeText={(value) => setPassword(value)} />
            
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.showPassword}
                onPress={onPressTogglePasswordVisualisation}>
                <>{visualPassword ? <Text>Show</Text> : <Text>Hide</Text>}</>              
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.submitBtn}
                onPress={onPressSubmitButton}>
                <Text style={styles.submitBtnText}>SIGN IN</Text>
            </TouchableOpacity>  

        </View>
  );
}

const styles = StyleSheet.create({
  form: {    
    paddingBottom: 16,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
  },

  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },

  loginInput: {    
    backgroundColor: "#F6F6F6",
    fontFamily: 'Roboto-Regular',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    color: "#212121",
    
    height: 50,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,

  },

  emailInput: {},

  passwordInput: {
    backgroundColor: "#F6F6F6",
    fontFamily: 'Roboto-Regular',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    color: "#212121",
    height: 50,
    marginBottom: 43,
    paddingLeft: 16,
    paddingRight: 60,
    },
  
    showPassword: {
    position: 'absolute',
    top: 184,
    right: 28,
  },
  
  submitBtn: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',    
    paddingTop: 16,
    paddingBottom: 16,
    height: 51,        
  },

  submitBtnText: {
    color: `#ffffff`,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  
});