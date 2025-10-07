import React from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Title from '../Components/ui/Title';
import Card from '../Components/ui/Card';
import PrimaryButton from '../Components/ui/PrimaryButton';
import InstructionText from '../Components/ui/InstructionText';



export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function confirmInputHandler() {
    const chsenNumber = parseInt(enteredNumber);

    if (isNaN(chsenNumber) || chsenNumber <= 0 || chsenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.',
        [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chsenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }
  return (
    <View style={styles.rootContainer} >
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>سلام زما نوم خالد</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />

        <View style={styles.buttonsRow}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },

  numberInput: {
    height: 55,
    width: 55,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
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








