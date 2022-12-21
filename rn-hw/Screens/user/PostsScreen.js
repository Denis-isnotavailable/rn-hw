import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import { useSelector } from "react-redux";

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { collection, getDocs } from "firebase/firestore"; 

import { db } from '../../firebase/config';


export default function PostsScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    // const [commetntsCount, setCommetntsCount] = useState([]);

    const { nickname, email } = useSelector(state => state.auth)
    
    useEffect(() => {        
        getAllPosts();        
        // getCommentsList();        
    }, []); 
    
    const getAllPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));

        if (querySnapshot) {
            setPosts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }                
    }

    // const getCommentsList = () => {
    //     posts.map(post => {
    //         const postId = post.id;
    //         getCommentsFromFirebase(postId);            
    //     })                
    // }

    // const getCommentsFromFirebase = async (postId) => {
    //     const querySnapshot = await getDocs(collection(db, "posts", postId, "comments"));
    //     if (querySnapshot) {
    //         console.log("querySnapshot", querySnapshot);
    //         setCommetntsCount(prev => [...prev, { name: postId, quantity: querySnapshot.docs?.length } ]);
    //     }                 
    // }


    
    // console.log("posts", posts);    

    return (
        <View style={styles.container}>

            <View style={styles.avatar} ></View>
        
            <View style={styles.usersData} >
                <Text style={styles.usersLogin} >{ nickname }</Text>
                <Text style={styles.usersEmail} >{ email }</Text>
            </View>

            <FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                <View style={styles.pictureContainer}>
                    <View style={styles.picture} >
                        <Image source={{uri: item.photo}} style={{width: '100%', height: 240, borderRadius: 8,}} />
                    </View>

                    <Text style={styles.title}>{ item.title }</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.commentsButton}
                            onPress={() => navigation.navigate("CommentsScreen", {postId: item.id, photo: item.photo})}
                        >
                            <FontAwesome name="comment-o" size={24} color="#bdbdbd" />
                            <Text style={styles.commentsText}>0</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.mapButton}
                            onPress={() => navigation.navigate("MapScreen", {location: item.location, title: item.title} )}
                        >
                            <Ionicons name="md-location-outline" size={24} color="#bdbdbd" />
                            <Text style={styles.locationText}>{ item.disposition }</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            )}  />
                
        </View>
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

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: '#f6f6f6',
        position: 'absolute',
        top: 32,
        left: 16,    
    },

    usersData: {
        height: 60,
        justifyContent: 'center',
        marginLeft: 68,
        marginBottom: 32,
    },

    usersLogin: {
        fontFamily: "Roboto-Bold",
        fontSize: 13,
        color: '#212121',
    },

    usersEmail: {
        fontFamily: "Roboto-Regular",
        fontSize: 11,
        color: '#212121',
    },

    pictureContainer: {        
        marginBottom: 32,
    },

    picture: {
        marginBottom: 8,
    },

    title: {        
        marginBottom: 8,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
    
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    commentsButton: {
        flexDirection: "row", 
    },

    mapButton: {
        flexDirection: "row",        
    },

    commentsText: {
        marginLeft: 6,
    },

    locationText: {
        marginLeft: 6,
        marginRight: 16,
    },
});