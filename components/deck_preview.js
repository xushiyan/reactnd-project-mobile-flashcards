import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { deckStyles } from '../utils/styles';

export default class DeckPreview extends PureComponent {
    _onPress = () => {
        const { title, onPressItem } = this.props
        onPressItem(title)
    }

    render() {
        const { title, numCards } = this.props
        return (
            < TouchableOpacity onPress={this._onPress} >
                <View style={deckStyles.container}>
                    <Text style={deckStyles.titleText}>{title}</Text>
                    <Text style={deckStyles.subtitleText}>{`${numCards} cards`}</Text>
                </View>
            </TouchableOpacity >
        )
    }
}
