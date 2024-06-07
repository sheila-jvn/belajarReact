import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reportData } from "../types";

interface ReportsState {
    data: reportData[];
}

const initialState: ReportsState = {
    data: [],
};

const reportsSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {
        setReports(state, action: PayloadAction<reportData[]>) {
            state.data = action.payload;
        },
        addReport(state, action: PayloadAction<reportData>) {
            state.data.push(action.payload);
        },
    },
});

export const { setReports, addReport } = reportsSlice.actions;
export default reportsSlice.reducer;