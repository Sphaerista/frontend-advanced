import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const ScrollSaveSlice = createSlice({
  name: "scrollSave",
  initialState,
  reducers: {
    setScrollPostition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginByUsername.pending, (state) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

// экспортируем сами actions и reducer
export const { actions: scrollSaveActions } = ScrollSaveSlice;
export const { reducer: scrollSaveReducer } = ScrollSaveSlice;
