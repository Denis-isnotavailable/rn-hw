import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default function PostsScreen() {    

    return (
        // <TouchableWithoutFeedback onPress={hideKeaboard}>
      
            <View style={styles.container}>
                
                {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}> */}

                    <View style={styles.avatar} ></View>
                    <View style={styles.usersData} >
                        <Text style={styles.usersLogin} >Natali Romanova</Text>
                        <Text style={styles.usersEmail} >email@example.com</Text>
                    </View>

                {/* </KeyboardAvoidingView> */}
                
            </View>
            
        // </TouchableWithoutFeedback>            
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
        marginLeft: 68
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
});