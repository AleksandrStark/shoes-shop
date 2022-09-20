import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const SearchItem = ({ searchValue, setSearchValue }) => {
	return (
		<div>
			<SearchIconWrapper>
				<SearchIcon
					sx={{
						color: 'primary.dark',
					}}
				/>
			</SearchIconWrapper>
			<StyledInputBase
				sx={{
					border: 'primary.dark',
				}}
				placeholder="Search…"
				autoFocus={true}
				inputProps={{ 'aria-label': 'search' }}
				onChange={(e) => setSearchValue(e.target.value)}
				value={searchValue}
			/>
			{searchValue && (
				<CloseIcon
					sx={{
						color: 'primary.dark',
					}}
					onClick={() => setSearchValue('')}
				/>
			)}
		</div>
	);
};

export default SearchItem;
