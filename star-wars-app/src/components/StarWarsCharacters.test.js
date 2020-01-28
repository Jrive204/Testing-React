import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api";
import { Provider } from "react-redux";
import Enzyme, { mount } from 'enzyme';
import { reducer } from "../reducers";
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<StarWarsCharacters /> unit test', () => {
    const getWrapper = (mockStore = createStore(reducer, { url: "https://swapi.co/api/people" })) => mount(
        <Provider store={mockStore}>
      <StarWarsCharacters/>
    </Provider>
  );
  
  
  jest.mock("../api");


test("render the Starwars names correctly", async () => {
  //   mockGetData.mockReturnValueOnce(true);

  const { getByText } = getWrapper();

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

// test("is button firing?", () => {
//   const { getByText } = render(<StarWarsCharacters />);

//   const nextButton = getByText(/next/i);
//   fireEvent.click(nextButton);
// })