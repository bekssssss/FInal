import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../api.js";

export const getProfile = createAsyncThunk(
    "getProfile",
    async (thunkAPI) => {
        try {
            const response = await $api.get("/profile");
        } catch (e) {

        }
    }
)