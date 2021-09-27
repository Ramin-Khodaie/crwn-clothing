import {
  fetchCollectionFail,
  fetchCollectionLoading,
  fetchCollectionSuccess,
  selectedCategoryLoading,
  selectedCategoryFail,
  selectedCategorySuccess,
} from "./collectionSlice";
import categories from "../../Data/shop_data";
export const fetchCollection = (data) => (dispatch) => {
  dispatch(fetchCollectionLoading());

  try {
    dispatch(fetchCollectionSuccess(data));
  } catch (error) {
    dispatch(fetchCollectionFail(error));
  }
};

export const selectCategory = (category) => (dispatch) => {
  dispatch(selectedCategoryLoading());
  try {
    const CATEGORY_MAP = {
      hats: 1,
      sneakers: 2,
      jackets: 3,
      womens: 4,
      mens: 5,
    };
    const selectedCategory = categories.find(
      (c) => c.id === CATEGORY_MAP[category]
    );
    console.log(3333, selectedCategory);
    dispatch(selectedCategorySuccess(selectedCategory));
  } catch (error) {
    dispatch(selectedCategoryFail(error));
  }
};
