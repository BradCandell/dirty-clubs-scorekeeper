import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import PlayersScreen from '../screens/PlayersScreen';
import AboutScreen from '../screens/AboutScreen';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { Platform } from 'react-native';
import PlayerDetailsScreen from '../screens/PlayerDetailsScreen';


const MainTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon isFocused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
            )
        }
    },
    Games: {
        screen: createStackNavigator({ Games: GamesScreen }),
        navigationOptions: {
            tabBarLabel: 'Games',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon isFocused={focused} name={Platform.OS === 'ios' ? 'ios-medal' : 'md-medal'} />
            )
        }
    },
    Players: {
        screen: createStackNavigator({ 
            Players: {
                screen: PlayersScreen
            },
            PlayerDetails: {
                screen: PlayerDetailsScreen
            }
        }),
        navigationOptions: {
            tabBarLabel: 'Players',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon isFocused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
            )
        }
    },
    About: {
        screen: createStackNavigator({ About: AboutScreen }),
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon isFocused={focused} name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'} />
            )
        }
    } 
})



export default createAppContainer(MainTabNavigator);
