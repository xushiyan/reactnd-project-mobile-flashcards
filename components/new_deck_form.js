import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { formStyles } from '../utils/styles';

export default class NewDeckForm extends Component {
    state = {
        newTitle: null
    }

    handleTextChange = (newTitle) => {
        this.setState({ newTitle })
    }

    handleSubmit = () => {
        if (!this.state.newTitle) {
            alert('Deck title cannot be empty!')
        }

        // save new deck
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
