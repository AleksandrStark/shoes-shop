import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	currentPage: 1,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.currentPage = Number(action.payload.page);
			state.categoryId = Number(action.payload.categoryId);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
