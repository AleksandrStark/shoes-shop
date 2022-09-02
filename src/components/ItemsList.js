import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';

const ItemsList = (props) => {
	// const { goods, setOrder } = props;

	return (
		<Grid container spacing={2}>
			<CatalogItem />
			<CatalogItem />
			<CatalogItem />
			<CatalogItem />
			<CatalogItem />
			{/* {goods.map((item) => (
				<CatalogItem key={item.id} setOrder={setOrder} {...item} />
			))} */}
		</Grid>
	);
};

export default ItemsList;
