import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryThumbnail = props => {
	const [gallery, setGallery] = useState([]);
	const [galleryImage, setGalleryImage] = useState([]);
	const [galleryArray, setGalleryArray] = useState([]);
	const [thumbnails, setThumbnails] = useState([]);
	const [title, setTitle] = useState([]);

	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/tags');
				const data = await response.json();
				setGallery(data.tags);
				setGalleryArray([...data.tags]);
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
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[7]}.json`
			)
		]);

		const promiseResponseArray = await Promise.all([
			...galleryPromise.map(async response => {
				return response.json();
			})
		]);

		setThumbnails(promiseResponseArray);

		const thumbnailURL = promiseResponseArray.map(item => {
			let finalThumbnail =
				`https://res.cloudinary.com/ryanphotos/image/upload/v` +
				item.resources[1].version +
				`/` +
				item.resources[1].public_id +
				`.jpg`;

			return finalThumbnail;
		});

		setGalleryImage(thumbnailURL);

		const mapTitle = promiseResponseArray.map((item, index) => {
			let grabTitle = item.resources[index].context.custom.title;
			return grabTitle;
		});

		setTitle(mapTitle);
	};

	return (
		<>
			{gallery.length && galleryImage.length && title.length
				? gallery.map((tag, index) => {
						return (
							<div className="thumbnail-container" key={tag._id}>
								<Link to={`/${tag}`}>
									<img src={`${galleryImage[index]}`} className="thumbnail" />
									<div className="overlay">
										<div className="gallery-title">{`${title[index]}`}</div>
									</div>
								</Link>
							</div>
						);
				  })
				: ''}
		</>
	);
};

export default GalleryThumbnail;
