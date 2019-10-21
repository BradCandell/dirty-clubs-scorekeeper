import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface PlayerDetailsScreenParams {
    itemID: string,
    player: any
}

type Parameters = NavigationScreenProp<NavigationState, PlayerDetailsScreenParams>;


const PlayerDetailsScreen = () => {
    const navigation = useNavigation<PlayerDetailsScreenParams>();
    const {
        state: { params }
    } = navigation;

    return (
        <View>
            <Text>Player Details</Text>
            <Text>{params.player.name.first} {params.player.name.last}</Text>
            <Text>Item ID: {params.itemID}</Text>            
        </View>
    );
}

PlayerDetailsScreen.navigationOptions = {
     title: 'Player Details'
};


export default PlayerDetailsScreen;