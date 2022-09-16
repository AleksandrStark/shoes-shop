import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';
import SkeletonCard from './Skeleton';

const SelesHits = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://631affcbfae3df4dcff15474.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				arr.sort(function (a, b) {
					return parseFloat(b.sold) - parseFloat(a.sold);
				});
				let selesHitsArr = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];

				setItems(selesHitsArr);
			});

		//   return () => {
		// 	second
		//   }
		setIsLoading(false);
	}, []);

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

export default SelesHits;
