import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from '@mui/material';
import CatalogItem from './CatalogItem';
import SkeletonCard from './Skeleton';

const ItemsList = ({ categoryId, searchValue }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pageQrt, setPageQrt] = useState(11);

	const skeleton = [...new Array(6)].map((_, i) => <SkeletonCard key={i} />);
	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const search = searchValue ? `search=${searchValue}` : '';

	const shoes = items
		// .filter((obj) => {
		// 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
		// 		return true;
		// 	}
		// 	return false;
		// })
		.map((item) => (
			<CatalogItem
				key={item.id}
				title={item.title}
				images={item.images}
				price={item.price}
			/>
		));

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://631affcbfae3df4dcff15474.mockapi.io/items?page=${page}&limit=6&${category}&${search}`
		)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
			});

		//   return () => {
		// 	second
		//   }
		setIsLoading(false);
	}, [category, search, page]);

	return (
		<>
			<Pagination
				count={pageQrt}
				page={page}
				onChange={(_, num) => setPage(num)}
			/>
			<Grid container spacing={3} sx={{ mt: 0 }}>
				{isLoading ? skeleton : shoes}
			</Grid>
		</>
	);
};

export default ItemsList;
