import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
    currentPage: string;
}

const initialState: NavigationState = {
    currentPage: 'Home', //default page
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        navigateTo(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        },
    },
});

export const { navigateTo } = navigationSlice.actions;
export default navigationSlice.reducer;