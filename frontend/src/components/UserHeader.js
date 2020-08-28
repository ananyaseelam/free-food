import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, List } from '@ui-kitten/components'

export default function UserHeader({navigation, user}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}>
                <Avatar
                    source={{ uri: user.avatarURI }}
                    size='small'
                    style={styles.avatar}
                />
            </TouchableOpacity>
            <Text category='s1' style={styles.name}>
                {user.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
    },
    name: {
        marginLeft: 8
    }
})