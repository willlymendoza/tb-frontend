import React from "react";
import App from "./App";
import { render, cleanup } from "@testing-library/react";

let container;

afterEach(cleanup);

beforeEach(() => {
  container = render(<App />);
});

test("renders App whitout crashing", () => {
  const { getByText } = container;

  expect(getByText("Ingrese texto")).toBeTruthy();
});
