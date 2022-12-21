import React, { useState } from "react";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Provider } from "react-redux";

import Main from './components/Main';
import { store } from "./redux/store";


const loadFonts = async () => {
    await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),    
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() { 
  const [isReady, setIsReady] = useState(false);  

  if (!isReady) {
    return (<AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)} />);
  }
  
  return (
    <Provider store={store}>

      <Main />

    </Provider>
        
  );
}