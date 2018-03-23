import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QuestionNav } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <QuestionNav />
      </View>
    );
  }
}
