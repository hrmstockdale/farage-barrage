import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Scoreboard from "./Scoreboard";

afterEach(cleanup);

test("Jest is working", () => {
  expect(true).toBeTruthy();
});
