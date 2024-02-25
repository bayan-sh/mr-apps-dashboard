import { createSlice } from '@reduxjs/toolkit';
import { ContactAction } from '../actions/ContactAction';
export const contactreducer = createSlice({
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
            .addCase(ContactAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(ContactAction.fulfilled, (state, { payload }) => {
                console.log(payload)

                state.loading = false;
            })
            .addCase(ContactAction.rejected, (state) => {
                state.loading = false;
            })


    }
})
export default contactreducer.reducer;