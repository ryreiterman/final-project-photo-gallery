import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// import { Image } from 'cloudinary-react';
// import Zoo from '../pages/Zoo';
// import config from '../config';
// import config2 from '../config2';

const GalleryThumbnail = props => {
	const [gallery, setGallery] = useState([]);
	const [galleryImage, setGalleryImage] = useState([]);
	const galleryArray = [];
	let newArray = [];
	// const thumbnailArray = [
	//         'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg',
	//         'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg'
	// 	];

	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/tags');
				const data = await response.json();
				console.log(data.tags[1]);
				setGallery(data.tags);
				galleryArray.push(data.tags);
				console.log(galleryArray[0]);
				getImage();
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const getImage = async () => {
		const galleryImageMap = () => {
			newArray = galleryArray[0].map(tag => {
				return `http://res.cloudinary.com/ryanphotos/image/list/${tag}.json`;
			});
			console.log(newArray);
		};

		galleryImageMap();

		const imageResponse = await fetch(
			`http://res.cloudinary.com/ryanphotos/image/list/${galleryArray[0][2]}.json`
		);
		const imageData = await imageResponse.json();
		const imageDataArray = imageData.resources;

		console.log(imageData);
		console.log(imageDataArray[0]);

		const thumbnailURL = imageDataArray.map(item => {
			let finalThumbnail =
				`https://res.cloudinary.com/ryanphotos/image/upload/v` +
				item.version +
				`/` +
				item.public_id +
				`.jpg`;

			return finalThumbnail;
		});
		console.log(thumbnailURL[0]);

		setGalleryImage(thumbnailURL[0]);
	};

	// useEffect(() => {
	// 	getImage();
	// }, []);

	return (
		<>
			{gallery.map(tag => {
				return (
					<div className="thumbnail-container" key={tag._id}>
						<Link to={`/${tag}`}>
							<img src={`${galleryImage}`} className="thumbnail" />
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default GalleryThumbnail;
