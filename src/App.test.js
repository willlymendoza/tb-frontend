import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Container from "./components/Container";
import { Provider } from "react-redux";

test("renders App whitout crashing", () => {
  shallow(<App />);
});

test("renders Provider inside App", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Provider).length).toEqual(1);
});

test("renders Container inside App", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Container).length).toEqual(1);
});
