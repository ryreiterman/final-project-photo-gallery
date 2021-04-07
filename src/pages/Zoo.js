import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

export default function Zoo(props) {
	const [image, setImage] = useState([]);
	const [prevLocation, setPrevLocation] = useState('');
	const [link, setLink] = useState(props.match.params.zoo);
	const firstimage = [];

	const getData = async () => {
		const response = await fetch(
			`https://res.cloudinary.com/ryanphotos/image/list/${props.match.params.zoo}.json`
		);
		const data = await response.json();
		const dataArray = data.resources;

		console.log(data);
		console.log(dataArray);

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
		// Run getData only when there is a change to link
		if (!prevLocation) {
			getData();
		} else {
			setPrevLocation(props.location.key);
		}
	}, [props.location.key]);

	return (
		<div>
			<ImageGallery items={image} />
		</div>
	);
}
