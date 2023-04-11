import { action, observable } from "mobx";

import { ApiStatus, JobDescriptionData } from "../../interface";
import {
  FetchJobFullDetail,
  fixtureJobDescriptionList,
} from "../../services/JobFullDescription/index.api";

class JobDescriptionStore {
  @observable JobDescription: JobDescriptionData | undefined;
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchJobDescriptionData = async (id: string) => {
    try {
      const Response = await FetchJobFullDetail(id);
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
    const response = fixtureJobDescriptionList();
    this.JobDescription = response;
    this.ApiStatus = ApiStatus.success;
  };
}

export default JobDescriptionStore;
