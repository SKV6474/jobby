import { fireEvent, render } from "@testing-library/react";
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

    (document.getElementById("PasswordType") as HTMLInputElement).value =
      "rahul@2021";

    const LoginBtnElement = container.querySelector("#LoginBtn");

    if (LoginBtnElement !== null) {
      fireEvent.click(LoginBtnElement);
    }

    expect(window.location.pathname).toBe("/");
  });
});
