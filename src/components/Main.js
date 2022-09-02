import { Box, Typography } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

const Main = () => {
	return (
		<Box sx={{ mx: 5 }}>
			<Header />
			<Typography
				variant="h4"
				sx={{
					textAlign: 'center',
					fontWeight: '600',
				}}
			>
				Хиты продаж
			</Typography>
			<ItemsList />
			<Footer />
		</Box>
	);
};

export default Main;
