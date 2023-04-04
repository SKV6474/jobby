import { action, observable } from "mobx";

import { ApiStatus } from "../../interface";
import { callJobList } from "../../services/JobListServices/index.api";

class JobListStore {
  @observable jobList = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  @observable coustomApi: string[] = [];
  // jobListContainer = [];
  EmploymentType: string = "";
  SearchValue: string = "";
  PackageRange: string = "";

  @action.bound
  fetchJobListData = async () => {
    try {
      const Response = await callJobList(this.coustomApi);
      if (Response.data !== "none") {
        this.jobList = Response.data.jobs;
        // this.jobListContainer = Response.data.jobs;
        this.ApiStatus = Response.ApiStatus;
      } else {
        this.ApiStatus = ApiStatus.failure;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  updateEmploymentType = (input: string) => {
    this.EmploymentType = input;
    this.coustomApi = [];
    this.coustomApi.push(this.EmploymentType);
    this.coustomApi.push(this.PackageRange);
    this.coustomApi.push(this.SearchValue);
  };

  @action.bound
  updatePackage = (input: string) => {
    this.PackageRange = input;
    this.coustomApi = [];
    this.coustomApi.push(this.EmploymentType);
    this.coustomApi.push(this.PackageRange);
    this.coustomApi.push(this.SearchValue);
  };

  @action.bound
  updateSearch = (input: string) => {
    this.SearchValue = input;
    this.coustomApi = [];
    this.coustomApi.push(this.EmploymentType);
    this.coustomApi.push(this.PackageRange);
    this.coustomApi.push(this.SearchValue);
  };
}

export default JobListStore;
