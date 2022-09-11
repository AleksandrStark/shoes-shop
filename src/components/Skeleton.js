import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

const SkeletonCard = () => {
	return (
		<Grid item xs={12} md={4}>
			<Stack spacing={3}>
				<Skeleton variant="rectangular" width={350} height={250} />
				<Skeleton variant="rectangular" width={250} height={15} />
				<Skeleton variant="rectangular" width={110} height={15} />
				<Skeleton variant="rectangular" width={80} height={30} />
			</Stack>
		</Grid>
	);
};

export default SkeletonCard;
