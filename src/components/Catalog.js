import { Box, Button, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ItemsList from './ItemsList';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const items = [
	'Все',
	'Женская обувь',
	'Мужская обувь',
	'Обувь унисекс',
	'Детская обувь',
];

const Catalog = ({ searchValue, setSearchValue }) => {
	const categoryId = useSelector((state) => state.filter.categoryId);
	const dispatch = useDispatch();

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

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

			<Stack spacing={3} direction="row" justifyContent="center">
				{items.map((item, i) => (
					<Button
						key={item}
						onClick={() => {
							onChangeCategory(i);
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
				<ItemsList />
			</Container>
			<Box textAlign="center" sx={{ my: 2 }}></Box>
		</Box>
	);
};

export default Catalog;
