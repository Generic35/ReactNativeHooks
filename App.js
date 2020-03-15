import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View
        style={{
          padding: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextInput
          placeholder="Course goal"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            padding: 10,
            width: '80%'
          }}
        />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
