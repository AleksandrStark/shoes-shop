import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';
import SkeletonCard from './Skeleton';

const ItemsList = ({ categoryId }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	console.log(categoryId);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://631affcbfae3df4dcff15474.mockapi.io/items?${
				categoryId > 0 ? `category=${categoryId}` : ''
			}`
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
	}, [categoryId]);

	return (
		<Grid container spacing={3} sx={{ mt: 0 }}>
			{isLoading
				? [...new Array(6)].map((_, i) => <SkeletonCard key={i} />)
				: items.map((item) => (
						<CatalogItem
							key={item.id}
							title={item.title}
							images={item.images}
							price={item.price}
						/>
				  ))}
		</Grid>
	);
};

export default ItemsList;
