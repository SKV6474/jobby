import { RouteComponentProps } from "react-router-dom";

export type Props = RouteComponentProps<{ id: string }>;

export type ProfileObjectType = {
  profile_details: {
    name: string;
    profile_image_url: string;
    short_bio: string;
  };
};

export type UserDeatailsType = {
  username: string;
  password: string;
};

export type LoginComponentProp = {
  onSubmitForm: (userDetails: UserDeatailsType) => void;
  HistoryProp: Props;
};

export enum ApiStatus {
  initial = "initial",
  loading = "loading",
  success = "success",
  failure = "failure",
}

export type JobListType = {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: number;
  title: string;
};

export type SkillsObject = {
  image_url: string;
  name: string;
};

export type JobDescriptionCompanyDetails = {
  company_logo_url: string;
  company_website_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  life_at_company: { description: string; image_url: string };
  location: string;
  package_per_annum: string;
  rating: number;
  skills: SkillsObject[];
  title: string;
};

export type SimilarJobObject = {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  rating: number;
  title: string;
};

export type JobDescriptionData = {
  job_details: JobDescriptionCompanyDetails;
  similar_jobs: SimilarJobObject[];
};
