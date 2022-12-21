import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from '../Screens/auth/LoginScreen';
import RegistrationScreen from '../Screens/auth/RegistrationScreen';
import Home from "../Screens/user/Home";
import { authStateChangeUser } from '../redux/auth/authOperations';


const AuthStack = createStackNavigator(); // use for group of Navigators
const MainTabs = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (      
      <>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
      </> 
    );
  }
  
  return (    
      <MainTabs.Screen name="Home" component={Home} options={{ headerShown: false }} />    
  );
}

export default function Main() {

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(authStateChangeUser())
    }, []);
    
    const { stateChange } = useSelector(state => state.auth);

    const routing = useRoute(stateChange);
  
    return ( 
        <NavigationContainer>

            <AuthStack.Navigator
                // initialRouteName={stateChange ? "Home" : "Login"}
            >

                {routing}       

            </AuthStack.Navigator>

        </NavigationContainer>
    );
}