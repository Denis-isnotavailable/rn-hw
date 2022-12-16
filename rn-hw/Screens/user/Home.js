import React from "react";
import {    
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreenNavigation from "./PostsScreenNavigation";

const MainTabs = createBottomTabNavigator(); // bottom navigation


export default function Home() {
    return (
        <MainTabs.Navigator
            initialRouteName="PostsScreenNavigation"
            screenOptions={{ tabBarShowLabel: false,  }}
            tabBarOptions={{tabStyle: { borderTopWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)' } }}
        >

            <MainTabs.Screen
                name="PostsScreenNavigation"
                component={PostsScreenNavigation}
                options={{
                    headerShown: false,                   
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{...styles.icon, backgroundColor: focused ? '#FF6C00' : '#ffffff'}}>
                            <Entypo name="images" size={size} color={focused ? '#ffffff' : '#212121'} />
                        </View>                        
                    ),
                }}
            />
            <MainTabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{                    
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{ marginLeft: 16 }}
                            onPress={() => alert("GoBack")}
                        >
                            <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
                        </TouchableOpacity>                        
                    ),
                    headerTitle: 'Create Post',
                    headerTitleAlign: "center",
                    headerStyle: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)' },
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{...styles.icon, backgroundColor: focused ? '#FF6C00' : '#ffffff'}}>
                            <Ionicons name="add-sharp" size={size} color={focused ? '#ffffff' : '#212121'} />
                        </View>                        
                    ),
                }}
            />
            <MainTabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{ marginRight: 16 }}
                            onPress={() => alert("LogOut")}
                        >
                            <MaterialCommunityIcons name="logout" size={24} color="#BDBDBD" />
                        </TouchableOpacity>                        
                    ),
                    headerTitle: 'Profile',
                    headerTitleAlign: "center",
                    headerStyle: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)' },
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{...styles.icon, backgroundColor: focused ? '#FF6C00' : '#ffffff'}}>
                            <AntDesign name="user" size={size} color={focused ? '#ffffff' : '#212121'} />
                        </View>                        
                    ),
                }}
            />

        </MainTabs.Navigator>
    );
};


const styles = StyleSheet.create({
    icon: {
        width: 70,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});