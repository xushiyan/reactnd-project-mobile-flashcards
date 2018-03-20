import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo';
import DeckList from './components/deck_list';
import DeckDetail from './components/deck_detail';
import NewDeckForm from './components/new_deck_form';
import NewCardForm from './components/new_card_form';
import QuizCard from './components/quiz_card';
import QuizResult from './components/quiz_result';
import { wisteria, white, amethyst } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
      title: 'Decks',
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeckForm,
    navigationOptions: {
      title: 'New Deck',
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? wisteria : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : wisteria,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      indicatorStyle: {
        backgroundColor: white
      },
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: amethyst,
      }
    }
  },
  NewCard: {
    screen: NewCardForm,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: amethyst,
      }
    }
  },
  StartQuiz: {
    screen: QuizCard,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: amethyst,
      }
    }
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: {
      title: 'Quiz Result',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: amethyst,
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar backgroundColor={wisteria} barStyle='light-content' />
        <MainNavigator />
      </View>
    )
  }
}
