import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function Home(props) {
	const images = [
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552433/zoo-pics/brevard-zoo/jag_lick_web_fyn4jn.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552433/zoo-pics/brevard-zoo/jag_lick_web_fyn4jn.jpg'
		}
	];

	return (
		<div>
			<ImageGallery items={images} />
		</div>
	);
}
