import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function BrevardZoo(props) {
	const images = [
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552246/zoo-pics/brevard-zoo/gator_web_dhwgqh.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616552246/zoo-pics/brevard-zoo/gator_web_dhwgqh.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551878/zoo-pics/brevard-zoo/giraffe_baby_cu_web_kxnv7q.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616551878/zoo-pics/brevard-zoo/giraffe_baby_cu_web_kxnv7q.jpg'
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
