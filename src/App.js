import React from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Container from "./components/Container/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
