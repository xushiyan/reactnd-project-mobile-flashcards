import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { formStyles } from '../utils/styles';
import { addCardToDeck } from '../utils/helpers';

export default class NewCardForm extends Component {
    state = {
        question: null,
        answer: null,
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleQuestionTextChange = (question) => {
        this.setState({ question })
    }

    handleAnswerTextChange = (answer) => {
        this.setState({ answer })
    }

    handleSubmit = () => {
        const { navigation } = this.props
        const { title } = navigation.state.params
        const card = this.state

        Promise.resolve(addCardToDeck(title, card)).then(result => {
            const { success, message } = result
            if (success) {
                Keyboard.dismiss()
                navigation.goBack()
            } else {
                alert(message)
            }
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={formStyles.container}>
                <TextInput
                    style={formStyles.input}
                    placeholder='Question'
                    returnKeyType='done'
                    onChangeText={this.handleQuestionTextChange} />
                <TextInput
                    style={formStyles.input}
                    placeholder='Answer'
                    returnKeyType='done'
                    onChangeText={this.handleAnswerTextChange} />
                <TouchableOpacity style={formStyles.submitButton} onPress={this.handleSubmit}>
                    <Text style={formStyles.submitButtonText}>Add New Card</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
