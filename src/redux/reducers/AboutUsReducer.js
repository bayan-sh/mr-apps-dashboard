import { createSlice } from '@reduxjs/toolkit';
import { GetAboutUsAction, UpdateAboutUsAction } from '../actions/AboutUsAction';
export const aboutUsReducer = createSlice({
    name: "Contact Reducer",
    initialState: {
        loading: false,
        totalItems: "",
        currentPage: "",
        aboutUs: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(GetAboutUsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetAboutUsAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
                state.aboutUs = payload.data.aboutUs;
                state.totalItems = payload.data.totalItems;
                state.currentPage = payload.data.currentPage;
            })
            .addCase(GetAboutUsAction.rejected, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })


            .addCase(UpdateAboutUsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(UpdateAboutUsAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })
            .addCase(UpdateAboutUsAction.rejected, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })

    }
});
export default aboutUsReducer.reducer;
