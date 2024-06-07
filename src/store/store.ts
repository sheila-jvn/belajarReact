import { configureStore } from "@reduxjs/toolkit";
import reportsReducer  from "./reportSlice";
import navigationReducer  from "./navigationSlice";

const store = configureStore({
    reducer: {
        reports: reportsReducer,
        navigation: navigationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

