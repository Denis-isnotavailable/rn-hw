
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const loadFonts = async () => {
    await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),    
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [subscription, setSubscription] = useState(false);
  const [isKeabordShown, setIsKeabordShown] = useState(false);
  const [isReady, setIsReady] = useState(false);  

  function onPressToggleSubscription() {
        setSubscription(!subscription);
  }
  
  function onInputFocus() {
    setIsKeabordShown(true);
  }

  function hideKeaboard() {
    setIsKeabordShown(false);
    Keyboard.dismiss();
  }

  function marginWithKeaboard() {
    if (isKeabordShown && subscription) return { marginBottom: -208 }
    else if (isKeabordShown && !subscription) return { marginBottom: -142 }
    return { marginBottom: 0 }
  }

  if (!isReady) {
    return (<AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)} />);
  }
  
  return (
    <TouchableWithoutFeedback onPress={hideKeaboard}>

      <View style={styles.container}>

        <ImageBackground source={require('./assets/images/img-bg.jpg')} style={styles.image}>
          
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>

            <View style={marginWithKeaboard()}>
              {subscription ?
                <LoginScreen onInputFocus={onInputFocus} hideKeaboard={hideKeaboard} /> :
                <RegistrationScreen onInputFocus={onInputFocus} hideKeaboard={hideKeaboard} />}

              <TouchableOpacity
                activeOpacity={1}                
                style={ {backgroundColor: `#ffffff`, paddingBottom: subscription ? 111 : 45} }
                onPress={onPressToggleSubscription}>
                {subscription ?
                  <Text style={styles.switchSubscriptionText}>have no account? SIGN UP</Text> : 
                  <Text style={styles.switchSubscriptionText}>already have an account? LOG IN</Text>}
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

  switchSubscriptionText: {    
    color: "#1B4371",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  }
  
});
