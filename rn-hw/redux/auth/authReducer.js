import { createSlice } from '@reduxjs/toolkit';

const state = {
    userId: null,
    nickname: null,
    email: null,
    stateChange: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: state,
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            nickname: payload.nickname,
            email: payload.email
        }),
        authStateChange: (state, { payload }) => ({
            ...state,
            stateChange: payload.stateChange
        }),
        authSignOut: () => state,
    },
});


export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;