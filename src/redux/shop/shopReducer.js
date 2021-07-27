import shop_data from "../../Data/shop_data";

const INITIAL_DATA = {
  collections: shop_data,
};
const shopReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
