import React, { Component } from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import { Question } from "../lib/requests";

class QuestionShowScreen extends Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.title
  });

  constructor (props) {
    super(props);

    this.state = {
      question: null
    };
  }

  componentDidMount () {
    const { params } = this.props.navigation.state;

    Question
      .one(params.id)
      .then(
        question => {
          this.setState({ question });
        }
      )
  }

  render () {
    const { question } = this.state;

    if (question === null) {
      return (
        <View />
      );
    }

    return (
      <View>
        <Text>{question.body}</Text>
        <Text>{question.created_at}</Text>
        <Text>{question.updated_at}</Text>
        <Text>{question.author.full_name}</Text>
      </View>
    );
  }
}


export { QuestionShowScreen };
