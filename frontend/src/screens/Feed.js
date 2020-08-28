import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Text, Avatar, List } from '@ui-kitten/components'

import UserHeader from '../components/UserHeader'

const DATA = [
    {
        id: 1,
        postTitle: 'Planet of Nature',
        user: {
            name: 'Caleb Biddulph',
            avatarURI:'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 2,
        postTitle: 'Lamppost',
        user: {
            name: 'Ananya Seelam',
            avatarURI:'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
]

export default class Feed extends Component {
    constructor(props) {
        //constructor to set default state
        super(props);
        this.state = {

        };
    }

    render() {
        const renderItem = ({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text category='s1' style={styles.cardTitle}>
                    {item.postTitle}
                </Text>
            </View>
            <UserHeader user={this.props.navigation, item.user} />
            <Image
              source={{ uri: item.imageURI }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text category='p2'>{item.randomText}</Text>
            </View>
          </View>
        )
        return (
            <List
                style={styles.container}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={DATA.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        marginBottom: 25
    },
    cardImage: {
        width: '100%',
        height: 300
    },
    cardTitle: {
        color: 'white'
    },
    cardContent: {
        padding: 10,
        borderWidth: 0.25,
        borderColor: 'white'
    }
});
