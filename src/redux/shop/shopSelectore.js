import { createSelector } from "reselect";

const CATEGORY_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const selectShop = (state) => state.shop;
export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCategory = (categoryID) =>
  createSelector([selectShopItems], (collections) =>
    collections.find((category) => category.id === CATEGORY_MAP[categoryID])
  );
