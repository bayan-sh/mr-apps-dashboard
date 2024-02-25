import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { errorMessage } from "../constant";
import { GetServicesAPI, DeleteServiceAPI, UpdateServiceAPI, CreateServiceAPI } from "../Api";
import axios from "axios";
export const ServicesAction = createAsyncThunk("admin/services/add", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.post(CreateServiceAPI, info);
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

export const getServicesAction = createAsyncThunk("admin/services/get", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axios.get(GetServicesAPI + info.page + "&size=" + info.size);
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

export const deletServicesAction = createAsyncThunk("admin/services/delete", async (id, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.delete(DeleteServiceAPI + id);
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

export const updateServicesAction = createAsyncThunk("admin/services/update", async (info, { rejectWithValue }) => {
    try {
        let { data } = await axiosInstance.patch(UpdateServiceAPI + info.id, info.obj);
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