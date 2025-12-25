import axios from "axios";
import { signUP, login } from "../../services/auth_api";

jest.mock("axios");

describe("Auth API services", () => {

  describe("signUP", () => {
    it("should call signup API and return response data", async () => {

      const mockUser = { email: "test@example.com", password: "123456" };

      axios.post.mockResolvedValueOnce({
        data: { message: "Signup successful" }
      });

      const result = await signUP(mockUser);

      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3000/signup",
        { user: mockUser }
      );

      expect(result).toEqual({ message: "Signup successful" });
    });
  });

  describe("login", () => {
    it("should call login API and return response data", async () => {

      const mockUser = { email: "test@example.com", password: "123456" };

      axios.post.mockResolvedValueOnce({
        data: { token: "abc123" }
      });

      const result = await login(mockUser);

      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3000/auth_login",
        { user: mockUser }
      );

      expect(result).toEqual({ token: "abc123" });
    });
  });

});
