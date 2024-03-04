import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { errorMessage } from "../constant";
import { GetAboutUsAPI, UpdateAboutUsAPI } from "../Api";
import axios from "axios";

export const GetAboutUsAction = createAsyncThunk("admin/about-us/get", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.get(GetAboutUsAPI);
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


export const UpdateAboutUsAction = createAsyncThunk("admin/about-us/update", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.put(UpdateAboutUsAPI,info.obj);
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