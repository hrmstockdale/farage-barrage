import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Player from "./Player";

afterEach(cleanup);

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

test("Player.js renders an image", () => {
  const { getByText, getByTestId, getByLabelText, container } = render(
    <Player />
  );

  const loadingText = getByText("Loading...");
  expect(loadingText);
});
