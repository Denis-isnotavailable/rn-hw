import React from "react";
import {
    StyleSheet,    
    View,    
} from 'react-native';

import MapView, { Marker } from "react-native-maps";


export default function MapScreen({navigation, route}) {

    console.log('route.params', route.params);

    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: route.params.location.latitude,
                    longitude: route.params.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType="standard"
                minZoomLevel={15}
            >
                <Marker
                    title={route.params.title}
                    coordinate={{
                        latitude: route.params.location.latitude,
                        longitude: route.params.location.longitude
                    }}
                />
            </MapView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});