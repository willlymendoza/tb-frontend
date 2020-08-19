import React from "react";
import TextList from "./TextList";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("should renders TextList whitout crashing", () => {
  render(<TextList textArray={[]} />);
});

test("should render list with data", () => {
  const array = ["one", "two", "three"];
  const { getAllByTestId } = render(<TextList textArray={array} />);
  const textItems = getAllByTestId("text-item").map((li) => li.textContent);

  expect(textItems).toEqual(array);
});
