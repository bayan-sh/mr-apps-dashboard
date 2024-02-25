import { createSlice } from '@reduxjs/toolkit';
import { LogInAction, LogOutAction, } from '../actions/RegisterAction';
export const registerreducer = createSlice({
    name: "Contact Reducer",
    initialState: {
        loading: false,
        totalItems: "",
        currentPage: "",
        login: []
    },
    reducers: {
    },
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


    }

})
export default registerreducer.reducer;