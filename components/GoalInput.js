import React, { useState } from 'react';
import { Modal, Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const onAddGoal = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <Button title="Cancel" color="red" onPress={props.onCancel} />
        <Button title="Add" onPress={onAddGoal} />
      </View>
    </Modal>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default GoalInput;
