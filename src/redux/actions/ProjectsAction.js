import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { errorMessage } from "../constant";
import { CreateProjectAPI, UpdateProjectAPI, DeleteProjectAPI, GetProjectsAPI } from "../Api";
import axios from "axios";
export const ProjectsAction = createAsyncThunk("admin/projects/add", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.post(CreateProjectAPI, info);
        return data;
    } catch (error) {
        if (error.response) {
            const validationMessage = error.response.data;
            return rejectWithValue(validationMessage);
        } else {
            return rejectWithValue(errorMessage);
        }
    }
});

export const getProjectsAction = createAsyncThunk("admin/projects/get", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axios.get(GetProjectsAPI + info.page + "&size=" + info.size);
        return data;
    } catch (error) {
        if (error.response) {
            const validationMessage = error.response.data;
            return rejectWithValue(validationMessage);
        } else {
            return rejectWithValue(errorMessage);
        }
    }
});

export const deletProjectsAction = createAsyncThunk("admin/projects/delete", async (id, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.delete(DeleteProjectAPI + id);
        return data;
    } catch (error) {
        if (error.response) {
            const validationMessage = error.response.data;
            return rejectWithValue(validationMessage);
        } else {
            return rejectWithValue(errorMessage);
        }
    }
});

export const updateProjectsAction = createAsyncThunk("admin/projects/update", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.patch(UpdateProjectAPI +info.id , info.obj);
        return data;
    } catch (error) {
        if (error.response) {
            const validationMessage = error.response.data;
            return rejectWithValue(validationMessage);
        } else {
            return rejectWithValue(errorMessage);
        }
    }
});