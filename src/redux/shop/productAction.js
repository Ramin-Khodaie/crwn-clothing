import {
  fecthProductsLoading,
  fecthProductsSuccess,
  fetchProductsError,
} from "./productSlice";

export const fecthProducts = (data) => (dispatch) => {
  dispatch(fecthProductsLoading());
  try {
    dispatch(fecthProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};
