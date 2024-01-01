import { createSlice } from "@reduxjs/toolkit";

const getDate = () => {
    const date = new Date().toJSON().slice(0, 10);
    return date;
};

const initialState = getDate();

export const dateSlice = createSlice({
    name: 'date',
    initialState: initialState,
    reducers: {
    }
});