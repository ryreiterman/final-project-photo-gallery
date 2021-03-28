import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

export default function BrevardZoo(props) {
	const [image, setImage] = useState([]);

	const getData = async () => {
		const response = await fetch(
			`http://res.cloudinary.com/ryanphotos/image/list/brevardzoo.json`
		);
		const data = await response.json();
		const dataArray = data.resources;

		const imgURL = dataArray.map(item => {
			let finalOutput = {
				original:
					`https://res.cloudinary.com/ryanphotos/image/upload/v` +
					item.version +
					`/` +
					item.public_id +
					`.jpg`,
				thumbnail:
					`https://res.cloudinary.com/ryanphotos/image/upload/v` +
					item.version +
					`/` +
					item.public_id +
					`.jpg`
			};
			return finalOutput;
		});

		setImage(imgURL);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<ImageGallery items={image} />
		</div>
	);
}
