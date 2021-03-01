import { createStore } from "redux";

const initialState = {
  count: 0,
};

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: state.count + 1,
      };
    case "kakeru_2":
      return {
        count: state.count * 2,
      }
    case "DECREASE_COUNT":
      return {
        count: state.count - 1,
      };
    case "waru_2":
      return {
        count: state.count / 2,
      }
    default:
      return state;
  }
};

const TestStore = createStore(reducer);

export default TestStore;