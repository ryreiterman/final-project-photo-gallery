import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function CentralFlorida(props) {
	const images = [
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/cheetah_brothers_web_zn8jpm.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/cheetah_brothers_web_zn8jpm.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cougar_central_fl_zoo_feb_28_2021_web_mwsmgp.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cougar_central_fl_zoo_feb_28_2021_web_mwsmgp.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cobra_central_fl_zoo_feb_28_2021_web_ew7xql.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cobra_central_fl_zoo_feb_28_2021_web_ew7xql.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550715/zoo-pics/central-florida-zoo/otter_web_rnpxaa.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550715/zoo-pics/central-florida-zoo/otter_web_rnpxaa.jpg'
		}
	];

	return (
		<div>
			<ImageGallery items={images} />
		</div>
	);
}
