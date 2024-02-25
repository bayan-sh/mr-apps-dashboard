import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { errorMessage } from "../constant";
import { loginAPI, logoutAPI, } from "../Api";
import axios from "axios";

export const LogInAction = createAsyncThunk("admin/auth/login", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axios.post(loginAPI, info);
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

export const LogOutAction = createAsyncThunk("admin/auth/logout", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.post(logoutAPI, info);
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