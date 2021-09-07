import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import EmojiResults from "./EmojiResults"

describe("emoji search test", () => {
  beforeEach(() => {
    render(<App></App>);
  })

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  test("renders emoji list", () => {

    const items = screen.getAllByText(/Click to copy emoji/i);
    expect(items.length).toEqual(20);
  });
})



