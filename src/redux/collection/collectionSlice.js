import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  collection: "",
  error: "",
  selectedCategory: "",
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    fetchCollectionLoading: (state) => {
      state.isLoading = true;
    },
    fetchCollectionSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.collection = payload;
    },
    fetchCollectionFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    selectedCategoryLoading: (state) => {
      state.isLoading = true;
    },
    selectedCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.selectedCategory = payload;
    },
    selectedCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },      
  },
});

const { reducer, actions } = collectionSlice;

export const {
  fetchCollectionLoading,
  fetchCollectionSuccess,
  fetchCollectionFail,
  selectedCategoryLoading,
  selectedCategorySuccess,
  selectedCategoryFail,
} = actions;

export default reducer;
