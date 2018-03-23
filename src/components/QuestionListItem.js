import React from "react";
import {
  View, Text, TouchableOpacity
} from "react-native";

function QuestionListItem (props) {
  const { title, body } = props;
  return (
    <View
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopWidth: 2,
        borderTopColor: 'deepskyblue',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}
        numberOfLines={2}
      >{title}</Text>

      <Text numberOfLines={3}>
        {body}
      </Text>
    </View>
  )
}

export { QuestionListItem };
