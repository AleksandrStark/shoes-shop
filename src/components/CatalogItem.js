import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

export default function CatalogItem({ title, images, price }) {
	return (
		<Grid item xs={12} md={4}>
			<Card
				sx={{
					height: '100%',
				}}
			>
				<CardMedia
					image={images[0]}
					component="img"
					alt="sneakers"
					title={title}
					sx={{ height: 250 }}
				/>
				<CardContent>
					<Typography variant="h6" component="h3">
						{title}
					</Typography>
					<Typography variant="body1">Цена: {price} руб.</Typography>
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
