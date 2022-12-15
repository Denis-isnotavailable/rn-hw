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

const initialLogin = '';
const initialEmail = '';
const initialPassword = '';

export default function RegistrationScreen({ navigation }) {
  const [visualPassword, setVisualPassword] = useState(true);
  const [isKeabordShown, setIsKeabordShown] = useState(false);
  const [login, setLogin] = useState(initialLogin);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);    
  
    

  function onPressTogglePasswordVisualisation() {
      setVisualPassword(!visualPassword);        
  }

  function onPressSubmitButton() {        
    hideKeaboard();

    setLogin(initialLogin);
    setEmail(initialEmail);
    setPassword(initialPassword);

    console.log("SIGNUP", login);
    console.log("SIGNUP", email);
    console.log("SIGNUP", password);
      
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
              
            <View style={[styles.form, {marginBottom: isKeabordShown? -142 : 0}]} >

              <View style={styles.avatar}>
                <TouchableOpacity activeOpacity={0.6} style={styles.avatarBtn}>
                  <ImageBackground
                    source={require('../../assets/images/add.jpg')}
                    style={styles.btnimage}>                
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>REGISTRATION</Text>

              <TextInput
                placeholder='Login'
                placeholderTextColor="#BDBDBD"
                textAlign='left'
                style={styles.loginInput}
                value={login}
                onFocus={onInputFocus}
                onChangeText={(value) => setLogin(value)} />
              
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
                <Text style={styles.submitBtnText}>SIGN UP</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.switchSubscriptionText}>already have an account? LOG IN</Text>
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
    paddingBottom: 45,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',    
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],    
    
  },

  avatarBtn: {    
    width: 25,
    height: 25,    
    borderRadius: 50,
    position: 'absolute',
    top: 81,
    right: -12,
    
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
    top: 310,
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