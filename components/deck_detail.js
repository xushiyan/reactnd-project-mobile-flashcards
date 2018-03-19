import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeckDetail extends Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text>{navigation.state.params.title}</Text>
            </View>
        )
    }
}
