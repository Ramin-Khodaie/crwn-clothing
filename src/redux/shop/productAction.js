import { addAllProductions, getAllProducts } from "../../api/productionService/productionApi";
import {
  fecthProductsLoading,
  fecthProductsSuccess,
  fetchProductsError,
} from "./productSlice";
import {fecthShopItemError,fetchShopItemSuccess,fetchShopitemLoading} from "./shopSlice"


export const fecthProducts = ()=> async(dispatch) => {
  dispatch(fecthProductsLoading());
  try {
    const result = await getAllProducts();
    if(result){
     dispatch(fecthProductsSuccess(result.data));
    }
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};

export const addAllProductstoMongo =async product =>{
  
  const result = await addAllProductions(product);
  
}

