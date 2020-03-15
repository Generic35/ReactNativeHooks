import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <TextInput
        placeholder="Course goal"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          padding: 10
        }}
      />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({});
