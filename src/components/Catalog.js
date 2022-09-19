import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import ItemsList from './ItemsList';

const items = [
	'Все',
	'Женская обувь',
	'Мужская обувь',
	'Обувь унисекс',
	'Детская обувь',
];

const Catalog = ({ searchValue }) => {
	const [categoryId, setCategoryId] = useState(0);

	return (
		<Box sx={{ mx: 5, fontFamily: 'Arial' }}>
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
				{items.map((item, i) => (
					<Button
						key={item}
						onClick={() => {
							setCategoryId(i);
						}}
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
				<ItemsList categoryId={categoryId} searchValue={searchValue} />
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
		</Box>
	);
};

export default Catalog;
