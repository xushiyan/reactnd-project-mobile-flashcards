import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'

export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
        return JSON.parse(result)
    })
}

export const getDeck = (deckTitle) => {

}

export const saveDeckTitle = (deckTitle) => {
    if (!deckTitle) {
        return { success: false, message: 'Deck title cannot be empty!' }
    }

    return getDecks().then(result => {
        if (deckTitle in result) {
            return { success: false, message: `Deck ${deckTitle} exists.` }
        }

        return AsyncStorage.mergeItem(
            DECKS_STORAGE_KEY,
            JSON.stringify({
                [deckTitle]: { title: deckTitle, questions: [] }
            })
        ).then(() => { return { success: true, message: null } })
    })
}

export const addCardToDeck = (deckTitle, card) => {

}
