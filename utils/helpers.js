import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'
const DECK_STORAGE_KEY_PREFIX = 'mobile-flashcards:deck:'

export const getDecks = () => {
    return AsyncStorage.getItem(
        DECKS_STORAGE_KEY
    ).then(result => {
        return JSON.parse(result)
    })
}

export const getDeck = (title) => {
    return AsyncStorage.getItem(
        `${DECK_STORAGE_KEY_PREFIX}${title}`
    ).then(result => {
        return JSON.parse(result)
    })
}

export const saveDeckTitle = (title) => {
    if (!title) {
        return { success: false, message: 'Deck title cannot be empty!' }
    }

    return getDecks().then(result => {
        if (result && title in result) {
            return { success: false, message: `Deck ${title} exists.` }
        }

        return AsyncStorage.mergeItem(
            DECKS_STORAGE_KEY,
            JSON.stringify({
                [title]: { title, numCards: 0, createDate: Date.now() }
            })
        ).then(() => {
            AsyncStorage.setItem(
                `${DECK_STORAGE_KEY_PREFIX}${title}`,
                JSON.stringify({ cards: [] })
            )
        }).then(() => { return { success: true, message: null } })
    })
}

export const addCardToDeck = (deckTitle, card) => {

}
