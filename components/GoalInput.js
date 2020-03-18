import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        onChangeText={props.onTextChange}
        value={props.enteredGoal}
        style={styles.input}
      />
      <Button title="Add" onPress={props.onAdd} />
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
