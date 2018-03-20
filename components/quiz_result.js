import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { quizStyles, deckStyles } from '../utils/styles';

export default class QuizResult extends Component {
    constructor() {
        super()
        this.handleRestartQuiz = this.handleRestartQuiz.bind(this)
        this.handleBackToDeck = this.handleBackToDeck.bind(this)
    }

    handleRestartQuiz() {
        const { navigation } = this.props
        navigation.pop()
    }

    handleBackToDeck() {
        const { navigation } = this.props
        navigation.pop()
        navigation.pop()
    }

    render() {
        const { score } = this.props.navigation.state.params
        return (
            <View style={quizStyles.container}>
                <Text style={quizStyles.indicatorText}>Your score</Text>
                <Text style={quizStyles.questionText}>{`${Math.round(100 * score)} %`}</Text>
                <TouchableOpacity style={deckStyles.startQuizButton} onPress={this.handleRestartQuiz}>
                    <Text style={deckStyles.startQuizButtonText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={deckStyles.cancelButton} onPress={this.handleBackToDeck}>
                    <Text style={deckStyles.cancelButtonText}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
