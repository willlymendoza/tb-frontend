import React from "react";
import Form from "./Form";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

const mockSubmit = jest.fn();
const mockInputChange = jest.fn();

test("should renders Form whitout crashing", () => {
  render(
    <Form
      handleInputChange={mockInputChange}
      handleOnSubmit={mockSubmit}
      inputText=""
      inputError=""
    />
  );
});

test("should render form", () => {
  const wrapper = shallow(
    <Form
      handleInputChange={mockInputChange}
      handleOnSubmit={mockSubmit}
      inputText=""
      inputError=""
    />
  );

  expect(wrapper.find("form").children()).toHaveLength(3);
});

test("should render form label title", () => {
  const wrapper = shallow(
    <Form
      handleInputChange={mockInputChange}
      handleOnSubmit={mockSubmit}
      inputText=""
      inputError=""
    />
  );

  expect(wrapper.find("label").text()).toEqual("Ingrese texto");
});
