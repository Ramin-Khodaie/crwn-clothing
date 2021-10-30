import { userLogin, createNewUser } from "../../api/userServices/userApi";
import { fetchUserFail, fetchUserLoading, fetchUserSuccess } from "./userSlice";
import {
  createUserLoading,
  createUserSuccess,
  createUserFail,
} from "./newUserSlice";
import { loginsuccess } from "../login/loginSlice";
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const doLogin = (data) => async (dispatch) => {
  dispatch(fetchUserLoading());

  try {
    const result = await userLogin(data);
    if (result.status === "success") {
      console.log(400, result);
      sessionStorage.setItem("at",result.accessToken);
      localStorage.setItem("rt",result.refreshToken);
      dispatch(loginsuccess())
      return dispatch(fetchUserSuccess(result));
    }
    // return dispatch(fetchUserFail(result));
  } catch (error) {
    dispatch(fetchUserFail(error));
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
