import axios from "axios";

const baseURL = "http://localhost:3001/user";
const loginURL = baseURL + "/login";
const logoutURL = baseURL + "/logout";
const newUserURL = baseURL + "/newuser";

export const userLogin = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginURL, data);

      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const createNewUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(newUserURL, user);
      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const logout = () => {
  const accessToken = sessionStorage.getItem("at");

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(logoutURL, {
        headers: {
          Authorization: accessToken,
        },
      });
      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
