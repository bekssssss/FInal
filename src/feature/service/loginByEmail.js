import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../api.js";

export const loginByEmail = createAsyncThunk(
    "authByEmail/login",
    async (data, thunkAPI) => {
        console.log(data);
        try {
            const response = await $api.post("login/", data)
            localStorage.setItem("token", response.data.token);
            return thunkAPI.fulfillWithValue(response)

        } catch (error) {
            return thunkAPI.rejectWithValue("Авторизация не прошла!");
        }
    }
)