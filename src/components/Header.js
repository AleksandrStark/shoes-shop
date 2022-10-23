import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import headerLogo from '../img/header-logo.png';
import { ShoppingBasket } from '@mui/icons-material';

import { useSelector } from 'react-redux';

import Banner from './Banner';
import { Link } from '@mui/material';
import SearchItem from './SearchItem';

const pages = [
	{ id: 0, label: 'Главная', route: '/' },
	{ id: 1, label: 'Каталог', route: '/catalog' },
	{ id: 2, label: 'О магазине', route: '/about' },
	{ id: 3, label: 'Контакты', route: '/contacts' },
];

const Header = () => {
	const { items, totalPrice } = useSelector((state) => state.cart);
	console.log(totalPrice);

	const totalCount = items.reduce((sum, item) => sum + item.count, 0);
	const navigate = useNavigate();

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundcolor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundcolor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	return (
		<div>
			<AppBar
				position="static"
				sx={{
					backgroundColor: 'primary.light',
					boxShadow: 0,
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						color: 'primary.light',
					}}
				>
					<Toolbar>
						<img src={headerLogo} alt="header-logo" />

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page, index) => (
								<Button
									key={page.id}
									onClick={() => navigate(page.route)}
									sx={{ my: 2, color: 'black', display: 'block' }}
								>
									{page.label}
								</Button>
							))}
						</Box>
						<Search>
							<SearchItem />
						</Search>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="В корзину">
								<IconButton sx={{ p: 0 }} backgroundColor="primary">
									<Badge badgeContent={totalCount} color="secondary">
										<ShoppingBasket onClick={() => navigate('/basket')} />
									</Badge>
								</IconButton>
							</Tooltip>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Banner />
		</div>
	);
};
export default Header;
