import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../api/axios-uitls';
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories', async () => {
    const response = await axiosInstance.get('/categories');
    return response.data.data;
  });
  


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default categoriesSlice.reducer;
