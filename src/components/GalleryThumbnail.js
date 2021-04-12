import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryThumbnail = props => {
	/// Returns array tag names from Cloudinary ///
	const [gallery, setGallery] = useState([]);
	/// Returns array of image urls from each gallery from Cloudinary based on index number ///
	const [galleryImage, setGalleryImage] = useState([]);
	/// Returns array tag names from Cloudinary ///
	const [galleryArray, setGalleryArray] = useState([]);
	/// Returns array of objects from Cloudinary with data on every image from every gallery ///
	const [thumbnails, setThumbnails] = useState([]);
	/// Returns array of the title from each gallery ///
	const [title, setTitle] = useState([]);

	/// Immediately Invoked Function Expression that fetches the tags from Cloudinary ///
	/// Passes those tags to setGalleryArray and getImage function ///
	useEffect(() => {
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

	/// Map over array of tags, insert tag into JSON url, fetch data, returns array of data from each gallery (Cloudinary limit is 10) ///

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
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[8]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[9]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[10]}.json`
			),
			fetch(
				`https://res.cloudinary.com/ryanphotos/image/list/${galleryArray[11]}.json`
			)
		]);

		const promiseResponseArray = await Promise.all([
			...galleryPromise.map(async response => {
				return response.json();
			})
		]);

		setThumbnails(promiseResponseArray);

		/// Maps over JSON from each gallery and returns an image from the gallery based on the index number ///

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

		/// Map over gallery data and return the title from each gallery to use on gallery thumbnails ///

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
