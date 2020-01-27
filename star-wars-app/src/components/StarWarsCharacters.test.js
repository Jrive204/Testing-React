import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api";
import { shallow } from "enzyme";
import axios from "axios";

jest.mock("../api");

test("render the Starwars names correctly", async () => {
  //   mockGetData.mockReturnValueOnce(true);

  const { getByText } = render(<StarWarsCharacters />);

  getByText(/Previous/i);
  getByText(/next/i);

  wait();
});

test("testing api call", () => {
  render(<StarWarsCharacters />);
  //   const nextButton = getByText(/next/i);
  //   fireEvent.click(nextButton);
  mockGetData();

  expect(mockGetData).toHaveBeenCalledTimes(1);
});

test("is button firing?", () => {
  const { getByText } = render(<StarWarsCharacters />);

  const nextButton = getByText(/next/i);
  fireEvent.click(nextButton);
});
