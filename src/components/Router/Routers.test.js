import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import Routers from "./Routers";
import { createMemoryHistory } from "history";
describe("ButtonLogin", () => {
  test("should pass", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByText } = render(
      <Router history={history}>
        <Routers />
      </Router>
    );
    expect(history.location.pathname).toBe("/");
    fireEvent.click(getByText("Test"));
    expect(history.location.pathname).toBe("/");
  });
});
