import { StyleSheet } from 'react-native';
import { amethyst, white, concrete, emerald, alizarin } from './colors';

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

export const deckStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        paddingBottom: 50,
        borderWidth: 0.5,
        borderColor: amethyst,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitleText: {
        fontSize: 18,
    },
    addCardButton: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: amethyst,
        marginTop: 40,
        marginBottom: 10,
    },
    addCardButtonText: {
        color: amethyst
    },
    startQuizButton: {
        backgroundColor: amethyst,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: amethyst,
        marginTop: 10,
        marginBottom: 10,
    },
    startQuizButtonText: {
        color: white
    },
    cancelButton: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: amethyst,
        marginTop: 10,
        marginBottom: 10,
    },
    cancelButtonText: {
        color: amethyst
    },
})

export const quizStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        paddingBottom: 50,
        borderWidth: 0.5,
        borderColor: amethyst,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    indicatorText: {
        fontSize: 14,
    },
    correctButton: {
        backgroundColor: emerald,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: emerald,
        marginTop: 40,
        marginBottom: 10,
    },
    correctButtonText: {
        color: white
    },
    incorrectButton: {
        backgroundColor: alizarin,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: alizarin,
        marginTop: 10,
        marginBottom: 10,
    },
    incorrectButtonText: {
        color: white
    },
    showAnswerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    showAnswerButtonText: {
        color: amethyst
    },
})
