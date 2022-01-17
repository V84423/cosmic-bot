import * as t from "../types";

const main = (
  state = {
    name: "guest",
    logged: false,
  },
  action
) => {
  switch (action.type) {
    case t.SET_USER:
      return { ...state, name: action.payload };
    case t.SET_LOGGEDIN:
      return { ...state, logged: action.payload };
    default:
      return { ...state };
  }
};

export default main;
