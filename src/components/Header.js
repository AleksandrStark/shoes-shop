import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import headerLogo from '../img/header-logo.png';
import { ShoppingBasket } from '@mui/icons-material';
import Banner from './Banner';
import { Link } from '@mui/material';

const pages = [
	{ id: 0, label: 'Главная', route: '/' },
	{ id: 1, label: 'Каталог', route: '/catalog' },
	{ id: 2, label: 'О магазине', route: '/about' },
	{ id: 3, label: 'Контакты', route: '/contacts' },
];

const Header = () => {
	const navigate = useNavigate();
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	return (
		<div>
			<AppBar position="static" elevation={0}>
				<Container maxWidth="xl">
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
							<SearchIconWrapper>
								<SearchIcon
									sx={{
										color: 'primary.dark',
									}}
								/>
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="В корзину">
								<Link href="/basket">
									<IconButton sx={{ p: 0 }} backgroundColor="primary">
										<Badge badgeContent={4} color="secondary">
											<ShoppingBasket />
										</Badge>
									</IconButton>
								</Link>
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
