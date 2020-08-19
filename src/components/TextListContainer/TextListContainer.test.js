import React from "react";
import TextListContainer from "./TextListContainer";
import { render, cleanup } from "@testing-library/react";

let container;

afterEach(cleanup);

beforeEach(() => {
  container = render(<TextListContainer textArray={[]} />);
});

test("should renders title correctly", () => {
  const { getByTestId } = container;

  expect(getByTestId("title").textContent).toEqual("Listado de textos");
});

test("should renders TextList correctly", () => {
  const { getByTestId } = container;

  expect(getByTestId("list-container")).toBeTruthy();
});
