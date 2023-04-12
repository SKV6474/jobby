import { action, observable } from "mobx";

import { ApiStatus, JobDescriptionData } from "../../interface";
class JobDescriptionStore {
  @observable JobDescription: any;
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  jobDescriptionService;

  constructor(service: any) {
    this.jobDescriptionService = service;
  }

  @action.bound
  fetchJobDescriptionData = async (id: string) => {
    try {
      const Response = await this.jobDescriptionService.fetchJobFullDetail(id);
      if (Response.data !== "none") {
        this.JobDescription = Response.data;
        this.ApiStatus = Response.ApiStatus;
      } else {
        this.ApiStatus = ApiStatus.failure;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  fetchFixtureData = () => {
    const response = this.jobDescriptionService.fixtureJobDescriptionList();
    this.JobDescription = response;
    this.ApiStatus = ApiStatus.success;
  };
}

export default JobDescriptionStore;
