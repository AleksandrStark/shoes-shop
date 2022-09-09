import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';
import items from '../backend/data/products.json';

const ItemsList = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://631affcbfae3df4dcff15474.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
			});

		//   return () => {
		// 	second
		//   }
	}, []);

	return (
		<Grid container spacing={2} sx={{ my: 3 }}>
			{items.map((item) => (
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
