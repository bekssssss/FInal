import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../api.js";

 const updateProfile = createAsyncThunk(
    "updateProfile",
    async (profileData, thunkAPI) => {
        try {
            const response = await $api.put("profile/", profileData);
            console.log(response.data);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось обновить профиль");
        }
    }
);

export default updateProfile;
