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
	const [galleryArray, setGalleryArray] = useState([]);
	const [thumbnails, setThumbnails] = useState([]);
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
				setGalleryArray([...data.tags]);
				console.log(galleryArray);
				await getImage(data.tags);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const getImage = async galleryArray => {
		const galleryImageMap = () => {
			const newArray = galleryArray.map(tag => {
				return `https://res.cloudinary.com/ryanphotos/image/list/${tag}.json`;
			});
			console.log(newArray);
		};

		galleryImageMap();

		const galleryPromise = await Promise.all([
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[0]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[1]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[2]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[3]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[4]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[5]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[6]}.json`
			)
		]);

		const promiseResponseArray = await Promise.all([
			...galleryPromise.map(async response => {
				return response.json();
			})
		]);

		setThumbnails(promiseResponseArray);
		console.log(promiseResponseArray);
		console.log(promiseResponseArray[1].resources[0].public_id);

		///////////////// After Arthur help code ///////////////////////////

		// const thumbnailURL = thumbnails.map(async (item, index) => {
		// 	let finalThumbnail =
		// 		`https://res.cloudinary.com/ryanphotos/image/upload/v` +
		// 		item.resources[index].version +
		// 		`/` +
		// 		item.resources[index].public_id +
		// 		`.jpg`;

		// 	return finalThumbnail;
		// });

		// console.log(thumbnailURL);

		const thumbnailURL = await Promise.all([
			...thumbnails.map(async (item, index) => {
				let finalThumbnail =
					`https://res.cloudinary.com/ryanphotos/image/upload/v` +
					item[index].resources[0].version +
					`/` +
					item[index].resources[0].public_id +
					`.jpg`;

				return finalThumbnail;
			})
		]);

		setGalleryImage(thumbnailURL);
		console.log(thumbnailURL);

		// const imageResponse = await fetch(
		// 	`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[3]}.json`
		// );
		// const imageData = await imageResponse.json();
		// const imageDataArray = imageData.resources;

		// console.log(imageData);
		// console.log(imageDataArray[0]);

		// const thumbnailURL = imageDataArray.map(item => {
		// 	let finalThumbnail =
		// 		`https://res.cloudinary.com/ryanphotos/image/upload/v` +
		// 		item.version +
		// 		`/` +
		// 		item.public_id +
		// 		`.jpg`;

		// 	return finalThumbnail;
		// });
		// console.log(thumbnailURL[0]);

		// setGalleryImage(thumbnailURL[0]);
	};

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
