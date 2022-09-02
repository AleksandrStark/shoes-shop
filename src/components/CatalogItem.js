import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sneakers from '../img/products/сlassic_sneakers_2.jpg';
import { Box, Grid } from '@mui/material';

export default function CatalogItem() {
	return (
		<Grid item xs={12} md={4}>
			<Card
				sx={{
					height: '100%',
				}}
			>
				<CardMedia
					image={sneakers}
					component="img"
					alt="sneakers"
					title="sneakers"
					sx={{ height: 350 }}
				/>
				<CardContent>
					<Typography variant="h6" component="h3">
						sneakers
					</Typography>
					<Typography variant="body1">Цена: 34000 руб.</Typography>
				</CardContent>
				<CardActions>
					<Box textAlign="center" sx={{ my: 2 }}>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								color: 'secondary.light',
								border: 1,
								'&:hover': {
									color: 'white',
									backgroundColor: 'secondary.light',
								},
							}}
						>
							Заказать
						</Button>
					</Box>
					{/* <Button
						variant="text"
						onClick={
							() => {}
							// setOrder({
							//     id: props.id,
							//     name: props.name,
							//     price: props.price,
							// })
						}
					>
						Заказать
					</Button> */}
				</CardActions>
			</Card>
		</Grid>
	);
}