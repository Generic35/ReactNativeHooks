import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={styles.input}
      />
      <Button title="Add" onPress={props.onAdd.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    width: '80%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
export default GoalInput;
