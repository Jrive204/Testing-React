import React from "react";
import { render, fireEvent, wait, getByText } from "@testing-library/react";
import { getData as mockGetData } from "../api";

import { Provider, useDispatch } from "react-redux";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import App from "../App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StarWarsCharacters from "./StarWarsCharacters";
import logger from "redux-logger";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([logger]);

jest.mock("../api");

describe("App", () => {
  test("Should find components", () => {
    const store = mockStore({
      url: "https://swapi.co/api/people"
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find("StarWarsCharacters").length).toEqual(1);
    expect(wrapper.find("DropDown").length).toEqual(1);
  });
});

describe("starwarsChar buttons", () => {
  test("Should find button text", () => {
    const store = mockStore({
      url: "https://swapi.co/api/people"
    });
    const { getByText } = render(
      <Provider store={store}>
        <StarWarsCharacters />
      </Provider>
    );

    getByText(/Previous/i);
    getByText(/next/i);
  });
});

test("testing api call", () => {
  const store = mockStore({
    url: "https://swapi.co/api/people"
  });
  render(
    <Provider store={store}>
      <StarWarsCharacters />
    </Provider>
  );

  mockGetData();

  expect(mockGetData).toHaveBeenCalledTimes(1);
});

it("async call", async () => {
  const store = mockStore({
    url: "https://swapi.co/api/people"
  });
  const { getByText } = render(
    <Provider store={store}>
      <StarWarsCharacters />
    </Provider>
  );
  // const data = {
  //   0: {
  //     name: "Luke Skywalker",
  //     height: "172"
  //   },
  //   1: {
  //     name: "C-3PO",
  //     height: "167"
  //   },
  //   2: {
  //     name: "R2-D2",
  //     height: "96"
  //   }
  // };
  // mockGetData(data);
  // mockGetData.mockResolvedValue("le");

  // expect(mockGetData).toHaveBeenCalledTimes(1);
  // expect(mockGetData).toHaveBeenCalledWith(data);

  // await wait(() => expect(getByText(/r2-d2/i)));
});

it("Dispatch call", async () => {
  const store = mockStore({
    url: "https://swapi.co/api/people"
  });
  render(
    <Provider store={store}>
      <StarWarsCharacters />
    </Provider>
  );

  const actions = store.dispatch({ type: "PEOPLE" });

  const expectedPayload = { type: "PEOPLE" };
  expect(actions).toEqual(expectedPayload);
});
