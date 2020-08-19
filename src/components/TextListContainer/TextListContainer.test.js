import React from "react";
import TextListContainer from "./TextListContainer";
import { render, screen, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import TextList from "./TextList";

afterEach(cleanup);

test("should renders title correctly", () => {
  render(<TextListContainer textArray={[]} />);

  expect(screen.getByTestId("title").textContent).toEqual("Listado de textos");
});

test("should renders TextList correctly", () => {
  const wrapper = shallow(<TextListContainer textArray={[]} />);

  expect(wrapper.find(TextList).length).toEqual(1);
});
