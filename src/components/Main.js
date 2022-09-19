import { Box, Typography } from '@mui/material';
import React from 'react';
import SelesHits from './SelesHits';

const Main = () => {
	return (
		<Box sx={{ mx: 5 }}>
			<Typography
				variant="h4"
				sx={{
					textAlign: 'center',
					fontWeight: '600',
				}}
			>
				Хиты продаж
			</Typography>
			<SelesHits />
		</Box>
	);
};

export default Main;
