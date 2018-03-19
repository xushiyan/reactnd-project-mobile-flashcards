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
import { saveDeckTitle, getDecks, getDeck } from '../utils/helpers';

export default class NewDeckForm extends Component {
    state = {
        title: null
    }

    componentDidMount() {
        this.props.navigation.addListener('didBlur', (payload) => {
            // clear state
            this.setState({ title: null })
        })
    }

    handleTextChange = (title) => {
        this.setState({ title })
    }

    handleSubmit = () => {
        const { title } = this.state
        Promise.resolve(saveDeckTitle(title)).then(result => {
            const { success, message } = result
            if (success) {
                Keyboard.dismiss()
                this.props.navigation.navigate('DeckDetail', { title })
            } else {
                alert(message)
            }
        })
    }

    render() {
        const { title } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={formStyles.container}>
                <Text style={formStyles.questionText}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={formStyles.input}
                    value={title}
                    returnKeyType='done'
                    onChangeText={this.handleTextChange} />
                <TouchableOpacity style={formStyles.submitButton} onPress={this.handleSubmit}>
                    <Text style={formStyles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
