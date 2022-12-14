import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
	return (
		<Box sx={{ mx: 5, fontFamily: 'monospace' }}>
			<Box>
				<Typography
					variant="h4"
					my={2}
					sx={{
						textAlign: 'center',
						fontWeight: '700',
						fontFamily: '2',
					}}
				>
					Страница не найдена
				</Typography>
			</Box>

			<Box>
				<Typography my={2}>Извините, такая страница не найдена!</Typography>
			</Box>
		</Box>
	);
};

export default NotFound;
