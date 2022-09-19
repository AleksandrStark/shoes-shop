import { Box, Typography } from '@mui/material';
import React from 'react';

const Contacts = () => {
	return (
		<Box sx={{ mx: 5 }}>
			<Box>
				<Typography
					variant="h4"
					my={2}
					sx={{
						textAlign: 'center',
						fontWeight: '600',
					}}
				>
					Контакты
				</Typography>
			</Box>

			<Box>
				<Typography my={2} sx={{ fontFamily: 'Arial' }}>
					Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе,
					д. 17, бизнес-центр W Plaza.
				</Typography>
			</Box>
			<Box>
				<Typography
					variant="h6"
					my={2}
					sx={{
						textAlign: 'center',
						fontWeight: '600',
					}}
				>
					Координаты для связи:
				</Typography>
			</Box>
			<Box>
				<Typography
					my={2}
					sx={{
						textAlign: 'left',
						fontFamily: 'Arial',
					}}
				>
					<Box>Телефон: +7 495 79 03 5 03 (ежедневно: с 09-00 до 21-00)</Box>
					<Box>Email: office@bosanoga.ru</Box>
				</Typography>
			</Box>
		</Box>
	);
};

export default Contacts;
