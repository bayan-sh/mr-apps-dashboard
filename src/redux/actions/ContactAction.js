import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { errorMessage } from "../constant";
import { PostContactsAPI } from "../Api";
import axios from "axios";
export const ContactAction = createAsyncThunk("admin/contacts/add", async(info ,{rejectWithValue })=> {
    try {
        let { data } = await axios.post(PostContactsAPI, info);
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