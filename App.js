import * as React from "react";
import { Home } from "./src/Home";
import { Provider } from "react-redux";
import { store } from "./src/rtk/store";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default () => {
  return <App />;
};