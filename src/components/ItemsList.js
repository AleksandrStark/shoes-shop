import React, { useState, useEffect, useRef } from 'react';
import { Grid, Pagination } from '@mui/material';
import CatalogItem from './CatalogItem';
import SkeletonCard from './Skeleton';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilters } from '../redux/slices/filterSlice';

const ItemsList = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pageQrt, setPageQrt] = useState(11);

	const categoryId = useSelector((state) => state.filter.categoryId);
	const searchValue = useSelector((state) => state.search.searchValue);
	const page = useSelector((state) => state.filter.currentPage);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const skeleton = [...new Array(6)].map((_, i) => <SkeletonCard key={i} />);
	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const search = searchValue ? `search=${searchValue}` : '';

	const isSearching = useRef(false);
	const isMounted = useRef(false);

	const shoes = items
		// .filter((obj) => {
		// 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
		// 		return true;
		// 	}
		// 	return false;
		// })
		.map((item) => <CatalogItem key={item.id} {...item} />);

	const fetchShoes = () => {
		setIsLoading(true);
		axios
			.get(
				`https://631affcbfae3df4dcff15474.mockapi.io/items?page=${page}&limit=6&${category}&${search}`
			)
			.then((res) => {
				setItems(res.data);
				setIsLoading(false);
			});
	};

	// if params was changed and compoment was mounted

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				categoryId,
				page,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, page]);

	// if  component was mounted - check the params and save in redux

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			dispatch(
				setFilters({
					...params,
				})
			);
			isSearching.current = true;
		}
	}, []);

	// if  component was mounted - fetch

	useEffect(() => {
		if (!isSearching.current) {
			fetchShoes();
		}
		isSearching.current = false;
	}, [category, search, page]);

	return (
		<>
			<Pagination
				count={pageQrt}
				page={page}
				onChange={(_, num) => dispatch(setCurrentPage(num))}
			/>
			<Grid container spacing={3} sx={{ mt: 0 }}>
				{isLoading ? skeleton : shoes}
			</Grid>
		</>
	);
};

export default ItemsList;
