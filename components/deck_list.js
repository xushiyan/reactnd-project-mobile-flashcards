import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getDecks } from '../utils/helpers';
import { AppLoading } from 'expo'
import DeckPreview from './deck_preview';

export default class DeckList extends PureComponent {
    state = {
        decks: []
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', (payload) => {
            getDecks().then(result => {
                this.setState({ decks: result ? Object.values(result) : [] })
            })
        })
    }

    _keyExtractor = (item, index) => item.title

    _onPressItem = (title) => {
        const { navigation } = this.props
        navigation.navigate('DeckDetail', { title })
    }

    _renderItem = ({ item }) => (
        <DeckPreview
            title={item.title}
            numCards={item.questions.length}
            onPressItem={this._onPressItem}
        />
    )

    render() {
        const { decks } = this.state

        if (!decks) {
            return <AppLoading />
        }
        return (
            <FlatList
                data={decks}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}
