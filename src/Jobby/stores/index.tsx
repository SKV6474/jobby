import JobDescriptionStore from "./JobDescription";
import JobFullDescriptionService from "../services/JobFullDescription/index.api";

import JobListStore from "./JobListStore";
import JobListService from "../services/JobListServices/index.api";

import ProfileStore from "./ProfileStore";
import ProfileService from "../services/ProfileApi/index.api";

export const profileDetail = new ProfileStore(new ProfileService());

export const jobList = new JobListStore(new JobListService());

export const jobDescription = new JobDescriptionStore(
  new JobFullDescriptionService()
);
