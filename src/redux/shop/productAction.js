import { addAllProductions, getAllProducts } from "../../api/productionService/productionApi";
import {
  fecthProductsLoading,
  fecthProductsSuccess,
  fetchProductsError,
} from "./productSlice";

export const fecthProducts = ()=> async(dispatch) => {
  dispatch(fecthProductsLoading());
  try {
    const result = await getAllProducts();
    if(result){
      console.log(1111,result)
      dispatch(fecthProductsSuccess(result.data));
    }
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};

export const addAllProductstoMongo =async product =>{
  console.log(999,product)
  const result = await addAllProductions(product);
  
}

