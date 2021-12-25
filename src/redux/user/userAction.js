import {
  userLogin,
  createNewUser,
  logout,
} from "../../api/userServices/userApi";
import { fetchUserFail, fetchUserLoading, fetchUserSuccess } from "./userSlice";
import {
  createUserLoading,
  createUserSuccess,
  createUserFail,
} from "./newUserSlice";
import { loginsuccess, logoutsuccess } from "../login/loginSlice";
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const doLogin = (data) => async (dispatch) => {
  dispatch(fetchUserLoading());

  try {
    const result = await userLogin(data);
    if (result.status === "success") {
      sessionStorage.setItem("at", result.accessToken);
      localStorage.setItem("rt", result.refreshToken);
      dispatch(loginsuccess());
      return dispatch(fetchUserSuccess(result));
    }
    if (result.status === "error") {
      console.log(400, result);
      return dispatch(fetchUserFail(result));
    }
    // return dispatch(fetchUserFail(result));
  } catch (error) {
    return dispatch(fetchUserFail(error));
  }
};

export const newUser = (user) => async (dispatch) => {
  dispatch(createUserLoading());

  try {
    const result = await createNewUser(user);
    if (result.status === "success")
      return dispatch(createUserSuccess(result.message));
  } catch (error) {
    dispatch(createUserFail());
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(fetchUserLoading);

  try {
    const res = await logout();
    if (res.status === "success") {
      dispatch(logoutsuccess());
      return dispatch(fetchUserSuccess(""));
    }
    if (res.status === "error") {
      return dispatch(fetchUserFail(res));
    }
  } catch (error) {
    dispatch(fetchUserFail());
  }
};
