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
        newTitle: null
    }

    componentDidMount() {
        this.props.navigation.addListener('didBlur', (payload) => {
            // clear state
            this.setState({ newTitle: null })
        })
    }

    handleTextChange = (newTitle) => {
        this.setState({ newTitle })
    }

    handleSubmit = () => {
        Promise.resolve(saveDeckTitle(this.state.newTitle)).then(result => {
            const { success, message } = result
            if (success) {
                Keyboard.dismiss()
                this.props.navigation.navigate('DeckDetail')
            } else {
                alert(message)
            }
        })
    }

    render() {
        const { newTitle } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={formStyles.container}>
                <Text style={formStyles.questionText}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={formStyles.input}
                    value={newTitle}
                    returnKeyType='done'
                    onChangeText={this.handleTextChange} />
                <TouchableOpacity style={formStyles.submitButton} onPress={this.handleSubmit}>
                    <Text style={formStyles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
