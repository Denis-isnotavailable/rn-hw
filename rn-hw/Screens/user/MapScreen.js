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


export default function MapScreen() {
return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});