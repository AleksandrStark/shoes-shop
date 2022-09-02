import { Box } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Basket = () => {
	return (
		<Box sx={{ mx: 5, fontFamily: 'Arial' }}>
			<Header />
			BASKET
			<Footer />
		</Box>
	);
};

export default Basket;
