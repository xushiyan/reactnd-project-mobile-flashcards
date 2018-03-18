import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default DeckPreview = ({ title, numCards }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{`${numCards} cards`}</Text>
        </View>
    )
}
