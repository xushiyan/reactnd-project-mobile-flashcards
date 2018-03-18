import { StyleSheet } from 'react-native';
import { amethyst, white, concrete } from './colors';

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: concrete,
        borderRadius: 5,
        margin: 50,
    },
    submitButton: {
        backgroundColor: amethyst,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    submitButtonText: {
        color: white
    },
})
