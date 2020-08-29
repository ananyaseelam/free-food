import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, List } from '@ui-kitten/components'

import UserHeader from '../components/UserHeader'

export default function PostInfo(props) {
    return (
        <View style={styles.container}>
            <View>
                <UserHeader navigation={props.navigation} user={props.user} />
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.timeDate} >
                    {props.date}, {props.time}
                </Text>
                <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}>
                    <Text style={ styles.reportText }> Report </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightSection: {
        textAlign: 'right'
    },
    timeDate: {
        color: '#F7F7F7',
        textAlign: 'right'
    },
    reportText: {
        color: '#B31B1B',
        textAlign: 'right'
    },
})