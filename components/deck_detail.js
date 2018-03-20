import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/helpers';
import { deckStyles } from '../utils/styles';

export default class DeckDetail extends Component {
    state = {
        cards: [],
    }

    constructor() {
        super()
        this.handleAddCard = this.handleAddCard.bind(this)
        this.handleStartQuiz = this.handleStartQuiz.bind(this)
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', (payload) => {
            const { title } = this.props.navigation.state.params
            getDeck(title).then(result => {
                this.setState({
                    cards: result ? result.cards : [],
                })
            })
        })
    }

    handleAddCard() {
        const { navigation } = this.props
        const { title } = navigation.state.params
        navigation.navigate('NewCard', { title })
    }

    handleStartQuiz() {

    }

    render() {
        const { title } = this.props.navigation.state.params
        const { cards } = this.state
        return (
            <View style={deckStyles.container}>
                <Text style={deckStyles.titleText}>{title}</Text>
                <Text style={deckStyles.subtitleText}>{`${cards.length} cards`}</Text>
                <TouchableOpacity style={deckStyles.addCardButton} onPress={this.handleAddCard}>
                    <Text style={deckStyles.addCardButtonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={deckStyles.startQuizButton} onPress={this.handleStartQuiz}>
                    <Text style={deckStyles.startQuizButtonText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
