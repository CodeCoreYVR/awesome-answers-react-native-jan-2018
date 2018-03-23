import React from "react";
import {
  View, Text, TouchableOpacity
} from "react-native";

function QuestionListItem (props) {
  const { title, body, onPress = () => {} } = props;
  return (
    <TouchableOpacity
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopWidth: 2,
        borderTopColor: 'deepskyblue',
      }}
      onPress={() => onPress({id: props.id, title: title})}
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
    </TouchableOpacity>
  )
}

export { QuestionListItem };
