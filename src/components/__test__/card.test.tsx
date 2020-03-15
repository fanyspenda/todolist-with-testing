import React from "react";
import { render } from "@testing-library/react";
import Card from "../card";

test("show todo data", async () => {
  const { getByTestId } = render(<Card data="this is data" />);
  const element = getByTestId("todo-name");
  expect(element).toHaveTextContent("this is data");
});

test("is fluid", async () => {
  const { getByTestId } = render(<Card data="this is data" />);
  const element = getByTestId("card-todo");
  expect(element).toHaveClass("ui fluid card");
});
