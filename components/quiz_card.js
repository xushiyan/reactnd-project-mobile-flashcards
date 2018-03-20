import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AppLoading } from 'react-native';
import { getDeck } from '../utils/helpers';
import { quizStyles } from '../utils/styles';

export default class QuizCard extends Component {
    state = {
        currentIndex: 0,
        correctCount: 0,
        showAnswer: false,
    }

    constructor() {
        super()
        this.handleFlip = this.handleFlip.bind(this)
        this.handleCorrect = this.handleCorrect.bind(this)
        this.handleIncorrect = this.handleIncorrect.bind(this)
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', (payload) => {
            this.setState({
                currentIndex: 0,
                correctCount: 0,
                showAnswer: false,
            })
        })
    }

    handleFlip() {
        const { showAnswer } = this.state
        this.setState({ ...this.state, showAnswer: !showAnswer })
    }

    _checkFinish() {
        const { navigation } = this.props
        const { cards } = navigation.state.params
        const { currentIndex } = this.state
        if (currentIndex === cards.length) {
            navigation.goBack()
        }
    }

    handleCorrect() {
        const { currentIndex, correctCount } = this.state
        this.setState({
            ...this.state,
            currentIndex: currentIndex + 1,
            correctCount: correctCount + 1
        }, () => { this._checkFinish() })
    }

    handleIncorrect() {
        const { currentIndex } = this.state
        this.setState({
            ...this.state,
            currentIndex: currentIndex + 1,
        }, () => { this._checkFinish() })
    }

    render() {
        const { cards } = this.props.navigation.state.params
        const { currentIndex, showAnswer } = this.state
        if (currentIndex === cards.length) {
            return <Text>Showing result...</Text>
        }

        const { question, answer } = cards[currentIndex]
        return (
            <View style={quizStyles.container}>
                <Text style={quizStyles.indicatorText}>{`${currentIndex + 1} / ${cards.length}`}</Text>
                <Text style={quizStyles.questionText}>{showAnswer ? question : answer}</Text>
                <TouchableOpacity style={quizStyles.showAnswerButton} onPress={this.handleFlip}>
                    <Text style={quizStyles.showAnswerButtonText}>{showAnswer ? 'Answer' : 'Question'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={quizStyles.correctButton} onPress={this.handleCorrect}>
                    <Text style={quizStyles.correctButtonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={quizStyles.incorrectButton} onPress={this.handleIncorrect}>
                    <Text style={quizStyles.incorrectButtonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
