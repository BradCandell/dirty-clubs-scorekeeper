import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

HomeScreen.navigationOptions = {
    title: 'Dirty Clubs Score Keeper'
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignContent: "center",
        alignItems: "center"
    }
});

export default HomeScreen;