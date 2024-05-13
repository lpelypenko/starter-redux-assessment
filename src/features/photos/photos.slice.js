import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/search.slice";
import photos from "./photos.data.js";

const initialState = {
  photos,
  lastId: photos.length,
};

const options = {
  name: "photos",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.lastId = state.lastId + 1;
      state.photos.unshift({ id: state.lastId, ...action.payload });
    },
    removePhoto: (state, action) => {
      state.photos.splice(
        state.photos.findIndex((photo) => photo.id === action.payload),
        1
      );
    },
  },
};

const photosSlice = createSlice(options);

export const { addPhoto, removePhoto } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;
export const selectFilteredPhotos = (state) => {
  const photos = selectAllPhotos(state);
  const searchTerm = selectSearchTerm(state);

  return photos.filter((item) =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
