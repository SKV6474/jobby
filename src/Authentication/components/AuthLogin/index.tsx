import React, { useState } from "react";

import { LoginComponent, UserDeatailsType } from "../../interface";

import { ErrorP, Input, InputDiv, Label, LoginBtn } from "./StyledComponents";

const AuthLogin = (props: LoginComponent): JSX.Element => {
  const { onSubmitForm, onLoginEvent } = props;
  const [userDetails, setUserDeatail] = useState<UserDeatailsType>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent): Promise<any> => {
    e.preventDefault();
    const response = await onSubmitForm(userDetails);
    onLoginEvent(response);
  };

  const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setUserDeatail({
      username: e.target.value,
      password: userDetails.password,
    });
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setUserDeatail({
      username: userDetails.username,
      password: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* UserName input */}
        <InputDiv>
          <Label>USERNAME</Label>
          <Input placeholder="Username" onChange={handleUserName} />
        </InputDiv>

        {/* Password Input */}
        <InputDiv>
          <Label>PASSWORD</Label>
          <Input placeholder="Password" onChange={handlePassword} />
        </InputDiv>

        <LoginBtn type="submit">
          <b>Login</b>
        </LoginBtn>

        <ErrorP id="Error"></ErrorP>
      </form>
    </>
  );
};

export default AuthLogin;
