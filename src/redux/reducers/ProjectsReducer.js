
import { createSlice } from '@reduxjs/toolkit';
import { ProjectsAction, getProjectsAction, deletProjectsAction, updateProjectsAction } from '../actions/ProjectsAction';
export const Projectsreducer = createSlice({
    name: "Projects Reducer",
    initialState: {
        loading: false,
        totalItems: "",
        currentPage: "",
        projects: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(ProjectsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(ProjectsAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false;
            })
            .addCase(ProjectsAction.rejected, (state) => {
                state.loading = false;
            })
            ////get
            .addCase(getProjectsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjectsAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.projects = payload.data.projects
                state.loading = false;
            })
            .addCase(getProjectsAction.rejected, (state) => {
                state.loading = false;
            })
            /////delete
            .addCase(deletProjectsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletProjectsAction.fulfilled, (state, { payload }) => {
                console.log(payload)

                state.loading = false;
            })
            .addCase(deletProjectsAction.rejected, (state) => {
                state.loading = false;
            })
            /////update
            .addCase(updateProjectsAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProjectsAction.fulfilled, (state, { payload }) => {
                console.log(payload)

                state.loading = false;
            })
            .addCase(updateProjectsAction.rejected, (state) => {
                state.loading = false;
            })


    }
})
export default Projectsreducer.reducer;