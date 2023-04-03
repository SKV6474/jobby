import { action, observable } from "mobx";
import { ApiStatus } from "../../interface";
import { FetchJobFullDetail } from "../../services/JobFullDescription/index.api";

class JobDescriptionStore {
  @observable JobDescription: any;
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
}

export default JobDescriptionStore;
