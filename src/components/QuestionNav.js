import { StackNavigator } from "react-navigation";
import {
  QuestionIndexScreen, QuestionShowScreen
} from "./"

// StackNavigator takes an object that defines
// all routes and returns a component that can
// use like a regular React component.
const QuestionNav = StackNavigator({
  // Inside this object:
  // Keys correspond to path name.
  // The "screen" property corresponds to
  // the component to be rendered.

  QuestionIndex: {
    screen: QuestionIndexScreen
  },
  QuestionShow: {
    screen: QuestionShowScreen
  }
})

export { QuestionNav };
