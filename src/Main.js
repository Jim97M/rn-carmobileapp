import React from "react";
import Screens from "./screens";
import store from "./store";
import { Provider } from "react-redux";

const Main = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default Main;