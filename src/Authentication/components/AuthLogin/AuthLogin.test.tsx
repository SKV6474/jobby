import { render } from "@testing-library/react";
import AuthLogin from ".";

const handleAuth = jest.fn();
const handleSubmit = jest.fn();

describe("AuthLogin", () => {
  test("Test case for login", () => {
    const { container } = render(
      <AuthLogin onSubmitForm={handleAuth} onLoginEvent={handleSubmit} />
    );
    const userElement = (
      document.getElementById("usernameType") as HTMLInputElement
    ).value;
    expect(userElement).toBe("");

    (document.getElementById("usernameType") as HTMLInputElement).value =
      "rahul";

    const afterUserValue = (
      document.getElementById("usernameType") as HTMLInputElement
    ).value;
    expect(afterUserValue).toBe("rahul");
  });
});
