import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Container from "./Container";

const mockStore = configureStore();
let store;
let component;

afterEach(cleanup);

beforeEach(() => {
  store = mockStore({
    textData: {
      array: [],
      error: "",
    },
  });

  component = render(
    <Provider store={store}>
      <Container />
    </Provider>
  );
});

test("should render Container without crashing", () => {
  const { getByTestId } = component;

  expect(getByTestId("container").childElementCount).toEqual(2);
});

test("should render Form & TextListContainer properly", () => {
  const { getByTestId } = component;

  expect(getByTestId("text-form")).toBeTruthy();
  expect(getByTestId("text-list")).toBeTruthy();
});
