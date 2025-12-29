import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "../../pages/SignUp";
import { signUP } from "../../services/auth_api";
import { BrowserRouter } from "react-router-dom";

/* =======================
   MOCKS
======================= */

// mock API
jest.mock("../../services/auth_api");

// mock navigate
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

// mock PhoneInput (important to avoid jsdom crash)
jest.mock("react-phone-input-2", () => (props) => {
  return (
    <input
      data-testid="phone-input"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
});

// mock lucide icons
jest.mock("lucide-react", () => ({
  Eye: () => <span>eye</span>,
  EyeOff: () => <span>eyeoff</span>
}));

/* =======================
   HELPER
======================= */

const renderComponent = () =>
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

/* =======================
   TESTS
======================= */

describe("SignUp Component", () => {

  test("renders signup UI correctly", () => {
    renderComponent();

    expect(screen.getByText(/sign up to qpay/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("John")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByText(/create an account/i)).toBeInTheDocument();
  });

  test("updates text inputs on change", () => {
    renderComponent();

    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "Vishwas" }
    });

    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "test@example.com" }
    });

    expect(screen.getByDisplayValue("Vishwas")).toBeInTheDocument();
    expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
  });

  test("updates phone number on change", () => {
    renderComponent();

    fireEvent.change(screen.getByTestId("phone-input"), {
      target: { value: "919999999999" }
    });

    expect(screen.getByTestId("phone-input").value)
      .toContain("919999999999");
  });

  test("toggles password visibility", () => {
    renderComponent();

    const passwordInput = screen.getByPlaceholderText("Enter Password");

    expect(passwordInput.type).toBe("password");

    fireEvent.click(screen.getByText("eye"));
    expect(passwordInput.type).toBe("text");

    fireEvent.click(screen.getByText("eyeoff"));
    expect(passwordInput.type).toBe("password");
  });

  test("submits form successfully and navigates to login", async () => {
    signUP.mockResolvedValueOnce({ message: "success" });

    renderComponent();

    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "Test" }
    });

    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "test@test.com" }
    });

    fireEvent.click(screen.getByText(/create an account/i));

    await waitFor(() => {
      expect(signUP).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });

  test("shows api validation errors on failure", async () => {
    signUP.mockRejectedValueOnce({
      response: {
        data: {
          errors: {
            email: ["Email already taken"]
          }
        }
      }
    });

    renderComponent();

    fireEvent.click(screen.getByText(/create an account/i));

    expect(
      await screen.findByText(/email already taken/i)
    ).toBeInTheDocument();
  });

});
