import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default DeckPreview = ({ name, numCards }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{`${numCards} cards`}</Text>
        </View>
    )
}
