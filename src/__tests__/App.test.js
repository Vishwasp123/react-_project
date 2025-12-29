import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

/* =======================
   MOCK PAGES
======================= */

// mock SignUp page
jest.mock("../pages/SignUp", () => () => (
  <div>Signup Page</div>
));

// mock Login page
jest.mock("../pages/Login", () => () => (
  <div>Login Page</div>
));

/* =======================
   TESTS
======================= */

describe("App routing", () => {

  test("renders SignUp page on default route (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Signup Page")).toBeInTheDocument();
  });

  test("renders Login page on /login route", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

});
