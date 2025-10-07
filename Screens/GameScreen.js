import React from 'react'
import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Title from '../Components/ui/Title';
import NumberContainer from '../Components/game/NumberContainer';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
// import { Ionicons } from '@expo/vector-icons';


let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  function nextGuessHandler(direction) { // direction => 'lower', 'greater'
    if (direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Don't lie!", "You Know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumber);

    }
  }
  return (
    <View style={styles.screen}>
      <Title>Opponents's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsRow} >
          <View style={styles.buttonWrapper} >
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              {/* <Ionicons name='md-remove' size={24} color='white' /> */}
              -
            </PrimaryButton>
          </View>
          <View styles={styles.buttonWrapper} >
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              {/* <Ionicons name='md-add' size={24} color='white' /> */}
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>
        LOG ROUNDS
      </View> */}
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,

  },
  buttonsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5
  }
});






















