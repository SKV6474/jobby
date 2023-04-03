import JobDescriptionStore from "./JobDescription";
import JobListStore from "./JobListStore";
import ProfileStore from "./ProfileStore";

export const profileDetail = new ProfileStore();

export const jobList = new JobListStore();

export const jobDescription = new JobDescriptionStore();
