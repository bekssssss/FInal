import {createSlice} from "@reduxjs/toolkit";
import {loginByEmail} from "../service/loginByEmail.js";
import {registerByEmail} from "../service/registerByEmail.js";

const initialState = {
    username: "",
    email: "",
    password: "",
    password2: "",
    isLoading: false,
    errors: [],
    successLogin: false,
    successRegister: false,

}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        set: (state, action) => {
           const { payload : { type , payload  } } = action;

            console.log(type);

           state[type] = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.successLogin = true
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = state.errors.push(action.payload);
            });
        builder
            .addCase(registerByEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.successRegister = true
            })
            .addCase(registerByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = state.errors.push(action.payload);
            })

    }
})

export const {
    name: authSliceReducerName,
    reducer: authSliceReducer,
    actions: authSliceActions,
} = authSlice;