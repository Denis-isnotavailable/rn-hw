import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';

import { useDispatch } from 'react-redux';

import { authSignInUser } from '../../redux/auth/authOperations';

const initialEmail = '';
const initialPassword = '';


export default function LoginScreen({ navigation }) {
  const [visualPassword, setVisualPassword] = useState(true);
  const [isKeabordShown, setIsKeabordShown] = useState(false);

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  
  const dispatch = useDispatch();

  function onPressTogglePasswordVisualisation() {
    setVisualPassword(!visualPassword);        
  }

  function onPressSubmitButton() {        
    hideKeaboard();
    
    setEmail(initialEmail);
    setPassword(initialPassword);

    dispatch(authSignInUser({ email, password }));
    
    console.log("LOGIN email", email);
    console.log("LOGIN password", password);
    
    navigation.navigate("Home");
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

        <ImageBackground source={require('../../assets/images/img-bg.jpg')} style={styles.image}>
          
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
              
            <View style={[styles.form, {marginBottom: isKeabordShown? -208 : 0}]}>             

              <Text style={styles.title}>LOGIN</Text>
              
              <TextInput
                placeholder='Email'
                placeholderTextColor="#BDBDBD"
                textAlign='left'
                style={styles.emailInput}
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

              <TouchableOpacity
                activeOpacity={1} onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.switchSubscriptionText}>have no account? SIGN UP</Text>
              </TouchableOpacity>

            </View> 

          </KeyboardAvoidingView>         
          
        </ImageBackground>      
        
      </View>
    
    </TouchableWithoutFeedback>
            
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",    
    
  },

  form: {    
    paddingBottom: 111,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',    
  }, 

  btnimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",    
  },

  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },

  emailInput: {
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
    marginBottom: 16,
    height: 51,        
  },

  submitBtnText: {
    color: `#ffffff`,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
  },

  switchSubscriptionText: {    
    color: "#1B4371",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  }
  
});