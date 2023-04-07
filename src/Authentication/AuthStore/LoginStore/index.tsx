import { action, observable } from "mobx";

import { ApiStatus, UserDeatailsType } from "../../interface";
import { LoginApi } from "../../services/AuthService/index.api";

class LoginStore {
  @observable LoginDetail: any;
  @observable ApiStatus: ApiStatus = ApiStatus.loading;

  @action.bound
  fetchLoginDetails = async (userDetails: UserDeatailsType) => {
    const response = await LoginApi(userDetails);
    // if (response.ok) {
    //   // this.LoginDetail = response.data;
    //   this.ApiStatus = ApiStatus.success;
    // } else {
    //   this.ApiStatus = ApiStatus.failure;
    // }
  };
}

export default LoginStore;
