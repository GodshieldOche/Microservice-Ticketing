import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import registerReducer from "./features/register"
import authReducer from "./features/auth"



const makeStore = () => configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
    },
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);