import { RouteComponentProps } from "react-router-dom";

export type LoginData = {
  jwt_token?: string;
  error_msg?: string;
  status_code?: number;
};

export type UserDeatailsType = {
  username: string;
  password: string;
};

export type LoginComponent = {
  onSubmitForm: (userDetails: UserDeatailsType) => void;
  onLoginEvent: (data: any) => any;
};

export type Props = RouteComponentProps<{ id: string }>;

export enum ApiStatus {
  initial = "initial",
  loading = "loading",
  success = "success",
  failure = "failure",
}
