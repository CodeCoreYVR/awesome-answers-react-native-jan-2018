import React, { Component } from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import { QuestionListItem } from "./";
import { Question } from "../lib/requests";

class QuestionIndexScreen extends Component {
  static navigationOptions = {
    title: "Questions"
  }

  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    Question
      .all()
      .then(questions => {
        this.setState({
          questions
          //👆 shortcut for 👇
          //questions: questions
        });
      });
  }

  render () {
    const { questions } = this.state;
    /*
    return (
      <ScrollView style={{ flex: 1 }}>
        {
          questions.map(
            question => (
              <View key={question.id}>
                <Text style={{fontSize: 30}}>
                  {question.title}
                </Text>
              </View>
            )
          )
        }
      </ScrollView>
    )
    */

    return (
      <FlatList
        data={questions}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) =>
          <QuestionListItem
            {...item}
            onPress={
              params =>  this.props
                .navigation
                .navigate("QuestionShow", params)
            }
          />
        }
      />
    )
  }
}

// QuestionIndexScreen.navigationOptions = {
//   title: "Questions"
// }

export { QuestionIndexScreen };
