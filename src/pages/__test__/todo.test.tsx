import * as React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Todo from "../todo";

test("show header", async () => {
  const { getByTestId } = render(<Todo />);
  const element = getByTestId("header1");
  expect(element).not.toBeEmpty();
});

test("Card is not visible in first load", async () => {
  //query tidak error ketika element tidak ada
  //get akan error ketika element tidak ada
  const { queryByTestId } = render(<Todo />);

  const cardElement = queryByTestId("todo-name");
  expect(cardElement).toBeNull();
});

test("Card is visible when todo submitted", async () => {
  const { getByPlaceholderText, getAllByTestId, getByTestId } = render(
    <Todo />
  );
  const textField = getByPlaceholderText("todo");
  const submitButton = getByTestId("submit");
  fireEvent.change(textField, { target: { value: "text" } });
  fireEvent.click(submitButton, { button: 0 });
  const cardElement = await waitForElement(() => getAllByTestId("todo-name"));

  expect(cardElement[0]).toBeInTheDocument();
});
