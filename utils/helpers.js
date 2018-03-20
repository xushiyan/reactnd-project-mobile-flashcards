import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'
const DECK_STORAGE_KEY_PREFIX = 'mobile-flashcards:deck:'
const NOTIFICATION_KEY = 'mobile-flashcards:notifications'

export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse)
}

export const getDeck = (title) => {
    return AsyncStorage.getItem(`${DECK_STORAGE_KEY_PREFIX}${title}`).then(JSON.parse)
}

export const saveDeckTitle = (title) => {
    if (!title) {
        return { success: false, message: 'Deck title cannot be empty!' }
    }

    return getDecks().then(decks => {
        if (decks && title in decks) {
            return { success: false, message: `Deck ${title} exists.` }
        }

        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: { title, numCards: 0, createDate: Date.now() }
        })).then(() => {
            AsyncStorage.setItem(`${DECK_STORAGE_KEY_PREFIX}${title}`,
                JSON.stringify({ cards: [] })
            )
        }).then(() => { return { success: true, message: null } })
    })
}

export const addCardToDeck = (title, card) => {
    if (!title || !card.question || !card.answer) {
        return { success: false, message: 'Invalid input.' }
    }
    const deckStorageKey = `${DECK_STORAGE_KEY_PREFIX}${title}`
    return AsyncStorage.getItem(deckStorageKey).then(JSON.parse)
        .then(({ cards }) => {
            AsyncStorage.mergeItem(deckStorageKey, JSON.stringify({ cards: [...cards, card] }), () => {
                AsyncStorage.mergeItem(
                    DECKS_STORAGE_KEY,
                    JSON.stringify({ [title]: { numCards: cards.length + 1 } }))
            })
        }).then(() => { return { success: true, message: null } })
}


/*
Notification logic
https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js
*/
export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const createNotification = () => {
    return {
        title: 'Complete your quiz!',
        body: "👋 Don't forget to complete a quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
