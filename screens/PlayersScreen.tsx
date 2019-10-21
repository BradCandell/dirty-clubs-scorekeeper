import React from 'react';
import { Button, Text, View, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';
import { Avatar } from "react-native-elements";

interface Name {
    first: string,
    last: string
}

interface Player {
    id: string,
    name: Name
}

const players: Array<Player> = [
    {
        id: "62701AE7-0F7D-49B9-8FB3-C173E90DDD79",
        name: {
            first: "Brad",
            last: "Candell"
        }
    },
    {
        id: "8F22C0B6-50E9-4B10-8A82-D629EAD34C37",
        name: {
            first: "Caleb",
            last: "Candell"
        }
    },
    {
        id: "82da880e-23c1-4ce0-8433-b8df56a19077",
        name: {
            first: "Katy",
            last: "Allen"
        }
    },
    {
        id: "94bdb486-4cca-41a8-8e95-dbffcfd7de78",
        name: {
            first: "Christopher",
            last: "Allen"
        }
    },
    {
        id: "00e71056-35de-4d05-a387-117ddbee1f4d",
        name: {
            first: "Sarah",
            last: "Candell"
        }
    },
    {
        id: "da131ced-9710-4289-92a4-6890bcedbf17",
        name: {
            first: "Tim",
            last: "Candell"
        }
    },
    {
        id: "a967478d-6f11-49cd-9de8-6b0ace4e388b",
        name: {
            first: "Matt",
            last: "Candell"
        }
    }
];




interface PlayerItemProps {
    player: Player,
    navigation: any
}



const PlayerItem: React.FC<PlayerItemProps> = (props) => {
    
    let playerInitials: string = props.player.name.first.substr(0, 1) + props.player.name.last.substr(0, 1);
    let playerName: string = props.player.name.first + " " + props.player.name.last;

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('PlayerDetails', { itemID: props.player.id, player: props.player }) }>
  
            <View style={styles.itemContainer}>
                
                <View style={styles.itemAvatarContainer}>
                    <Avatar size="medium" title={playerInitials} activeOpacity={0.7} rounded />   
                </View>

                <View style={styles.itemDataContainer}>
                    <Text style={styles.playerName}>{playerName}</Text>
                    <View style={styles.itemStatsContainer}>
                        <Text>Wins:</Text>
                        <Text style={styles.playerStatValue}>0</Text>
                        <Text>Total Games Played:</Text>
                        <Text style={styles.playerStatValue}>0</Text>
                    </View>                
                </View>

            </View>

        </TouchableOpacity>
    )
}

const PlayersScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView style={styles.container}>
                <FlatList data={players} keyExtractor={(item: Player) => item.id} renderItem={(item) => <PlayerItem player={item.item} navigation={navigation} />} >
                </FlatList>
            </ScrollView>
        </View>
    );
}

PlayersScreen.navigationOptions = {
    title: 'Players',
};


const styles = StyleSheet.create({
    container: {
        margin: 5   
    },
    itemContainer: {
        flexDirection: "row",
        margin: 10
    },
    
    itemAvatarContainer: {
        marginRight: 10
    },

    itemDataContainer: {
        marginLeft: 5
    },

    itemStatsContainer: {
        flexDirection: "row"
    },

    
    playerName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    
    playerStatValue: {
        fontWeight: "600",
        paddingLeft: 4,
        paddingRight: 14
    }

});

export default PlayersScreen