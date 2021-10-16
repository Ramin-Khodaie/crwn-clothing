import {
  fetchCollectionFail,
  fetchCollectionLoading,
  fetchCollectionSuccess,
  selectedCategoryLoading,
  selectedCategoryFail,
  selectedCategorySuccess,
} from "./collectionSlice";
import categories from "../../Data/shop_data";
import {getCollection,getShopItems} from '../../api/productionService/productionApi';
export const fetchCollection = () => async(dispatch) => {
  dispatch(fetchCollectionLoading());

  try {
    const res = await getShopItems();
    if(res.status === "success"){
      console.log(766,res)
      dispatch(fetchCollectionSuccess(res.data));
    }
  } catch (error) {
    dispatch(fetchCollectionFail(error));
  }
};

export const selectCategory = (_id) => async(dispatch) => {
  dispatch(selectedCategoryLoading());
  try {
    // const CATEGORY_MAP = {
    //   hats: 1,
    //   sneakers: 2,
    //   jackets: 3,
    //   womens: 4,
    //   mens: 5,
    // };
    // const selectedCategory = categories.find(
    //   (c) => c.id === CATEGORY_MAP[category]
    // );
    console.log(3333, _id);
    const result = await getCollection(_id);
    if (result.status === "success") {
      dispatch(selectedCategorySuccess(result.data));
    }
  } catch (error) {
    dispatch(selectedCategoryFail(error));
  }
};
