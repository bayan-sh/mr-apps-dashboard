import { createSlice } from '@reduxjs/toolkit';
import { LogInAction, LogOutAction, } from '../actions/AuthAction';
export const authReducer = createSlice({
    name: "Auth Reducer",
    initialState: {
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LogInAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(LogInAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                localStorage.setItem("adminToken", payload.data.token)
                localStorage.setItem("username", payload.data.admin.name)
                state.loading = false;
            })
            .addCase(LogInAction.rejected, (state) => {
                state.loading = false;
            })

            .addCase(LogOutAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(LogOutAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                localStorage.setItem("adminToken", undefined)
                state.loading = false;
            })
            .addCase(LogOutAction.rejected, (state) => {
                state.loading = false;
            })
    }
});
export default authReducer.reducer;