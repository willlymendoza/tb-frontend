import React from "react";
import Form from "./Form";
import { render, cleanup } from "@testing-library/react";

let container;
afterEach(cleanup);

beforeEach(() => {
  container = render(
    <Form
      handleInputChange={jest.fn()}
      handleOnSubmit={jest.fn()}
      inputText=""
      inputError=""
    />
  );
});

test("should renders Form whitout crashing", () => {
  const { getByTestId } = container;

  expect(getByTestId("text-form")).toBeTruthy();
});
