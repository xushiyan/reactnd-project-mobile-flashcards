import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { deckStyles } from '../utils/styles';

export default class DeckPreview extends PureComponent {
    _onPress = () => {
        const { deck, onPressItem } = this.props
        onPressItem(deck.title)
    }

    render() {
        const { title, numCards } = this.props.deck
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
