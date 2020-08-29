import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, List } from '@ui-kitten/components'

export default function UserHeader(props) {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => props.navigation.navigate('Profile')}>
            <Avatar
                source={{ uri: props.user.avatarURI }}
                size='tiny'
                style={styles.avatar}
            />
            <Text category='s1' style={styles.text} style={styles.name}>
                {props.user.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#F7F7F7'
    },
    name: {
        marginLeft: 7,
        color: '#F7F7F7'
    }
})