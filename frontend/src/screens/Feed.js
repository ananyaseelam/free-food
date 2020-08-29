import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Text, Avatar, List } from '@ui-kitten/components'

import PostInfo from '../components/PostInfo'

const DATA = [
    {
        id: 1,
        title: 'Pizza',
        user: {
            name: 'Caleb Biddulph',
            avatarURI:'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        date: '5/19/2020',
        time: '3:03 pm',
        imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: "vegetarian, kosher, gluten-free"
    },
    {
        id: 2,
        title: 'Donuts',
        user: {
            name: 'Ananya Seelam',
            avatarURI:'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        date: '5/20/2020',
        time: '12:28 am',
        imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        tags: "vegan"
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
            <Text category='h2' style={styles.title}>
                {item.title}
            </Text>
            <PostInfo
                navigation={this.props.navigation} user={item.user}
                date={item.date} time={item.time} />
            <Image
              source={{ uri: item.imageURI }}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text category='p2' style={styles.description} >{item.description}</Text>
              <Text category='p2' style={styles.tags} >Tags: {item.tags}</Text>
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
        flex: 1,
        backgroundColor: '#F7F7F7',
        padding: 12,
    },
    card: {
        backgroundColor: '#222',
        marginBottom: 10,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15
    },
    image: {
        height: 300,
        borderRadius: 6,
        marginVertical: 10,
    },
    title: {
        textAlign: 'center',
        color: '#F7F7F7',
        marginBottom: 7,
    },
    content: {
        margin: 0,
    },
    description: {
        color: '#F7F7F7'
    },
    tags: {
        marginTop: 5,
        color: '#F7F7F7',
        opacity: 0.7
    },
});
