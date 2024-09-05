import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../api.js";

export const loginByEmail = createAsyncThunk(
    "authByEmail/login",
    async (data, thunkAPI) => {
        console.log(data);
        try {
            const response = await $api.post("login/", data)
            localStorage.setItem("refresh", response.data.refresh)
            localStorage.setItem("access", response.data.access)
            return thunkAPI.fulfillWithValue(response)

        } catch (error) {
            return thunkAPI.rejectWithValue("Авторизация не прошла!");
        }
    }
)