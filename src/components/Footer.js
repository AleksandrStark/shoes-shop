import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Typography } from '@mui/material';
import paypal from '../img/footer-icons/paypal.png';
import mastercard from '../img/footer-icons/mastercard.png';
import visa from '../img/footer-icons/visa.png';

const prevDefault = (event) => event.preventDefault();

const Footer = () => {
	return (
		<Box className="footer">
			<Box sx={{ flexGrow: 1, p: 3 }} color="gray">
				<Grid container spacing={15}>
					<Grid item xs={4}>
						<Box sx={{ mx: 'auto', my: 2, fontWeight: '700' }} color="black">
							Информация
						</Box>
						<Box sx={{ p: 1 }}>
							<Link href="/" underline="none" color="secondary.light">
								О магазине
							</Link>
						</Box>
						<Box sx={{ p: 1 }}>
							<Link href="/catalog" underline="none" color="secondary.light">
								Каталог
							</Link>
						</Box>
						<Box sx={{ p: 1 }}>
							<Link href="/contacts" underline="none" color="secondary.light">
								Контакты
							</Link>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box sx={{ mx: 'auto', my: 2, fontWeight: '700' }} color="black">
							Принимаем к оплате
						</Box>
						<Box>
							<Box>
								<img src={paypal} alt="paypal" />
								<img src={mastercard} alt="mastercard" />
								<img src={visa} alt="visa" />
							</Box>
							<Typography variant="caption">
								2009-2022 с. BosaNoga.ru - модный интернет-магазин обуви и
								аксессуаров. Все права защищены. Доставка по всей России.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{ mx: 'auto', my: 2, fontWeight: '700', textAlign: 'right' }}
							color="black"
						>
							Контакты
						</Box>
						<Box sx={{ textAlign: 'right' }}>
							<Box color="secondary.light">+7 499 79 03 503</Box>
							<Box>Ежедневно: с 9-00 до 21-00</Box>
							<Box color="secondary.light">office@bosanoga.ru</Box>
							<Box>
								<TwitterIcon /> <FacebookIcon /> <InstagramIcon />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Footer;
