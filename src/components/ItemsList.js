import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';
import SkeletonCard from './Skeleton';

const ItemsList = ({ categoryId }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	console.log(categoryId);
	let url = '';
	if (categoryId === 0) {
		url = 'https://631affcbfae3df4dcff15474.mockapi.io/items';
	} else {
		url =
			'https://631affcbfae3df4dcff15474.mockapi.io/items?category=' +
			categoryId;
	}

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
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
	}, [url]);

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
