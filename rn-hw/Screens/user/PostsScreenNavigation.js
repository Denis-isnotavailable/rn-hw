import React from "react";
import {    
    TouchableOpacity,
    View,
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const PostsStack = createStackNavigator();


export default function PostsScreenNavigation() {
return (
    <PostsStack.Navigator
        initialRouteName="PostsScreen"
        screenOptions={{ tabBarShowLabel: false,  }}
        tabBarOptions={{tabStyle: { borderTopWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)' } }}
    >
        <PostsStack.Screen
            name="PostsScreen"
            component={PostsScreen}
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
                headerTitleAlign: "center",
                headerTitle: 'Posts',
                headerStyle: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)' },                
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{...styles.icon, backgroundColor: focused ? '#FF6C00' : '#ffffff'}}>
                        <Entypo name="images" size={size} color={focused ? '#ffffff' : '#212121'} />
                    </View>                        
                ),
            }}
        />

        <PostsStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{
                headerTitle: 'Comments',
                headerTitleAlign: "center",
                headerStyle: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)' },
                tabBarHideOnKeyboard: true,
                // tabBarShowLabel: false,                    
            }}
        />


        <PostsStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
                headerTitle: 'Map',
                headerTitleAlign: "center",
                headerStyle: { borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)' },
                tabBarHideOnKeyboard: true,
                // tabBarShowLabel: false,
            }}
        />
        
    </PostsStack.Navigator>
    );
};