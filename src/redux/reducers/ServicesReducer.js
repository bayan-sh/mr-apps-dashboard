import { createSlice } from '@reduxjs/toolkit';
import { ServicesAction, getServicesAction, deletServicesAction, updateServicesAction } from '../actions/ServicesAction';
export const Servicesreducer = createSlice({
    name: "Services Reducer",
    initialState: {
        loading: false,
        totalItems: "",
        currentPage: "",
        services: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(ServicesAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(ServicesAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })
            .addCase(ServicesAction.rejected, (state) => {
                state.loading = false;
            })
            ////
            .addCase(getServicesAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getServicesAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.services = payload.data.services
                state.loading = false;
            })
            .addCase(getServicesAction.rejected, (state) => {
                state.loading = false;
            })
            /////
            .addCase(deletServicesAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletServicesAction.fulfilled, (state, { payload }) => {
                console.log(payload)

                state.loading = false;
            })
            .addCase(deletServicesAction.rejected, (state) => {
                state.loading = false;
            })
            /////
            .addCase(updateServicesAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateServicesAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })
            .addCase(updateServicesAction.rejected, (state) => {
                state.loading = false;
            })


    }
})
export default Servicesreducer.reducer;