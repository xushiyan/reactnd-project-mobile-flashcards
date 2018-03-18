import React from 'react';
import { TabNavigator, StackNagivator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import DeckList from './components/deck_list';
import NewDeckForm from './components/new_deck_form';

const FlashCardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  NewDeck: {
    screen: NewDeckForm,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }

})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashCardsStatusBar backgroundColor='#000' barStyle='dark-content' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
