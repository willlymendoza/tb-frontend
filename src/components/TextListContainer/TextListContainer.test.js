import React from "react";
import TextListContainer from "./TextListContainer";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import TextList from "../TextList/TextList";

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
  const wrapper = shallow(<TextListContainer textArray={[]} />);

  expect(wrapper.find(TextList).length).toEqual(1);
});
