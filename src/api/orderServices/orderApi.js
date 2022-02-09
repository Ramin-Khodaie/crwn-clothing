import axios, { Axios } from "axios";

const baseUrl = "http://localhost:3001/order";

export const makeOrder = (order) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(baseUrl + "/", { order });
      if (res.status === 200) {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
