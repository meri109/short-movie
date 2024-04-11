import { createSlice } from '@reduxjs/toolkit';
import { sendLoginData, sendRegisterData } from '../api/authApi';

const initialState = {
    username: '',
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginInfo: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        }, 
        setRegisterInfo: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;


        }
    }
})

export const {setLoginInfo, setRegisterInfo} = authSlice.actions;
export default authSlice.reducer;

export const loginAction = (username, password) => {
    return (dispatch) => {
        sendLoginData(username, password)
        .then(response => {
            const {token} = response.data;
            dispatch(setLoginInfo({username: username, token: token}))
        })
    }
}

export const registerAction = (username, first_name, last_name, email, password) => {
    return (dispatch) => {
        sendRegisterData(username, first_name, last_name, email, password)
        .then(response => {
            const {token} = response.data;
            dispatch(setRegisterInfo({username, token}))
        })
    }
}
