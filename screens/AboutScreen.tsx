import React from 'react';
import Constants from 'expo-constants';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';


const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Image style={styles.appLogo} source={require('../assets/icon.png')} width={192} height={192} />
            <Text style={styles.appName}>{Constants.manifest.name}</Text>
            <View style={{flexDirection: "row"}}>
                <Text>v</Text>
                <Text style={styles.appVersion}>{Constants.manifest.version}</Text>
            </View>
            
        </View>
    );
}

AboutScreen.navigationOptions = {
    title: 'About'
};

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center"
    },
    appLogo: {
        marginTop: 20,
        marginBottom: 10
    },
    appName: {
        fontSize: 36,
        fontWeight: "bold"
    },
    appVersion: {
        fontWeight: "bold"
    }
});

export default AboutScreen