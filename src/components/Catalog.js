import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

const items = [
	'Все',
	'Женская обувь',
	'Мужская обувь',
	'Обувь унисекс',
	'Детская обувь',
];

const Catalog = () => {
	return (
		<Box sx={{ mx: 5, fontFamily: 'Arial' }}>
			<Header />
			<Typography
				variant="h4"
				sx={{
					textAlign: 'center',
					fontWeight: '600',
				}}
			>
				Каталог
			</Typography>
			<TextField
				size="small"
				id="outlined-basic"
				label="Поиск"
				variant="outlined"
				sx={{
					width: 230,
				}}
			/>
			<Stack spacing={3} direction="row" justifyContent="center">
				{items.map((item) => (
					<Button
						key={item}
						onClick={() => {}}
						sx={{
							my: 2,
							color: 'dodgerblue',
							display: 'block',
						}}
					>
						{item}
					</Button>
				))}
			</Stack>
			<Container>
				<ItemsList />
			</Container>
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
					Загрузить ещё
				</Button>
			</Box>

			<Footer />
		</Box>
	);
};

export default Catalog;
