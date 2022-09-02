import React from 'react';

import banner from '../img/banner.jpg';

const Banner = () => {
	return (
		<div className="banner">
			<img src={banner} alt="banner" />
			<div className="banner-text">К весне готовы!</div>
		</div>
	);
};

export default Banner;
