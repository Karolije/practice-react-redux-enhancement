import React from "react";
import Github from "../src/modules/github/github";
import { Provider } from "react-redux";
import store from "../src/modules/github/index";

const Task03 = () => {
  return (
    <Provider store={store}>
      <Github />
    </Provider>
  );
};

export default Task03;
