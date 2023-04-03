import { action, observable } from "mobx";
import { ApiStatus } from "../../interface";
import { callJobList } from "../../services/JobListServices/index.api";

class JobListStore {
  @observable jobList = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchJobListData = async () => {
    try {
      const Response = await callJobList();
      if (Response.data !== "none") {
        this.jobList = Response.data.jobs;
        this.ApiStatus = Response.ApiStatus;
      } else {
        this.ApiStatus = ApiStatus.failure;
      }
    } catch (e) {
      this.ApiStatus = ApiStatus.failure;
    }
  };
}

export default JobListStore;
