import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TAX_RATE = 0.07;

function ccyFormat(num) {
	return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
	return qty * unit;
}

function createRow(desc, qty, unit) {
	const price = priceRow(qty, unit);
	return { desc, qty, unit, price };
}

function subtotal(items) {
	return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
	createRow('Paperclips (Box)', 100, 1.15),
	createRow('Paper (Case)', 10, 45.99),
	createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Basket = () => {
	return (
		<Box sx={{ mx: 5, fontFamily: 'Arial' }}>
			<Box>
				<Typography
					variant="h4"
					my={2}
					sx={{
						textAlign: 'center',
						fontWeight: '600',
					}}
				>
					Корзина
				</Typography>
			</Box>
			<TableContainer sx={{ border: 1, borderColor: 'grey.400' }}>
				<Table sx={{ minWidth: 700 }} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="right">Название</TableCell>
							<TableCell align="right">Количество</TableCell>
							<TableCell align="right">Стоимость</TableCell>
							<TableCell align="right">Итого</TableCell>
							<TableCell align="right">Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.desc}>
								<TableCell>{row.desc}</TableCell>
								<TableCell align="right">{row.qty}</TableCell>
								<TableCell align="right">{row.unit}</TableCell>
								<TableCell align="right">{ccyFormat(row.price)}</TableCell>
								<TableCell align="right">{ccyFormat(row.price)}</TableCell>
								<TableCell align="right">
									<Button
										variant="outlined"
										size="medium"
										sx={{
											color: 'error.main',
											border: 1,
											'&:hover': {
												color: 'white',
												backgroundColor: 'error.main',
											},
										}}
									>
										Удалить
									</Button>
								</TableCell>
							</TableRow>
						))}

						<TableRow>
							<TableCell rowSpan={2} />
							<TableCell rowSpan={2} />
							<TableCell rowSpan={2} />
							<TableCell colSpan={2} align="right">
								Общая стоимость
							</TableCell>
							<TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Box>
				<Typography
					variant="h4"
					my={2}
					sx={{
						textAlign: 'center',
						fontWeight: '600',
					}}
				>
					Оформить заказ
				</Typography>
			</Box>
			<Box
				justifyContent="center"
				sx={{
					display: 'flex',
					'& > :not(style)': {
						m: 1,
						width: 400,
						height: 300,
					},
				}}
			>
				<Paper
					elevation={0}
					sx={{ border: 1, borderColor: 'grey.400' }}
					style={{
						padding: 20,
					}}
				>
					<Typography mx={2} mt={3} mb={1}>
						Телефон
					</Typography>
					<Box>
						<TextField
							label="Ваш телефон"
							placeholder="Ваш телефон"
							required
							fullWidth
						/>
					</Box>
					<Typography mx={2} mt={2} mb={1}>
						Адрес доставки
					</Typography>
					<Box>
						<TextField
							label="Адрес доставки"
							placeholder="Адрес доставки"
							type="password"
							required
							fullWidth
						/>
					</Box>

					<FormControlLabel
						control={<Checkbox name="checkedB" color="primary" />}
						label="Согласен с правилами доставки"
					/>
					<Box textAlign="center">
						<Button
							type="submit"
							variant="outlined"
							size="medium"
							sx={{
								color: 'primary.dark',
								border: 1,
								'&:hover': {
									color: 'white',
									backgroundColor: 'primary.dark',
								},
							}}
						>
							Оформить заказ
						</Button>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
};

export default Basket;
