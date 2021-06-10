import * as types from "../actionTypes";

const initialState = [
  {
    id: 1,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy typesetting industry."
  }
];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TODO:
      return state;
    case types.UPDATE_TODO:
      return state;
    case types.DELETE_TODO:
      return state;
    default:
      return state;
  }
}
