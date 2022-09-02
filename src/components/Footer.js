import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
	return (
		<footer className="footer">
			<Box sx={{ flexGrow: 1 }} color="gray">
				<Grid container spacing={5}>
					<Grid item xs={3}>
						<Box sx={{ mx: 'auto', fontWeight: '700' }}>Информация</Box>
						<Box>
							<a href="/">О магазине</a>
						</Box>
						<Box>
							<a href="/">Каталог</a>
						</Box>
						<Box>
							<a href="/">Контакты</a>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box sx={{ mx: 'auto', fontWeight: '700' }}>Принимаем к оплате</Box>
						<Box>
							2009-2022 с. BosaNoga.ru - модный интернет-магазин обуви и
							аксессуаров. Все права защищены. Доставка по всей России.{' '}
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box sx={{ mx: 'auto', fontWeight: '700' }}>Контакты</Box>
						<Box>+7 499 79 03 503</Box>
						<Box>Ежедневно: с 9-00 до 21-00</Box>
						<Box>office@bosanoga.ru</Box>
						<Box>
							<TwitterIcon /> <FacebookIcon /> <InstagramIcon />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</footer>
	);
};

export default Footer;
