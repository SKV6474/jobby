import { RouteComponentProps } from "react-router-dom";

export type Props = RouteComponentProps<{ id: string }>;

export type ProfileObjectType = {
  profile_details: {
    name: string;
    profile_image_url: string;
    short_bio: string;
  };
};

export enum ApiStatus {
  initial = "initial",
  loading = "loading",
  success = "success",
  failure = "failure",
}
