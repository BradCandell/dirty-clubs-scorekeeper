import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';


const GamesScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>Games Screen Text</Text>
            <Button
                title="Button"
                onPress={() => {
                    navigation.navigate('PlayersStack', { text: 'Hi!' });
                }}
            />

            <Button
                title="Open"
                onPress={() => {
                    navigation.openDrawer();
                }}
            />

            <Button
                title="Close"
                onPress={() => {
                    navigation.closeDrawer();
                }}
            />

            <Button
                title="Button"
                onPress={() => {
                    navigation.toggleDrawer();
                }}
            />

        </View>
    );
}

GamesScreen.navigationOptions = {
    title: 'Games'
};


export default GamesScreen;