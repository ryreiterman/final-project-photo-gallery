import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function AnimalKingdom(props) {
	const getData = async () => {
		const response = await fetch(
			`http://res.cloudinary.com/ryanphotos/image/list/animalkingdom.json`
		);
		const data = await response.json();

		const dataArray = data.resources;

		console.log(dataArray[3]);

		dataArray.forEach(element => {
			console.log(
				`https://res.cloudinary.com/ryanphotos/image/upload/v` +
					element.version +
					`/` +
					element.public_id +
					`.jpg`
			);
		});

		// setCategory(jeopardyData.category.title.toUpperCase());
		// setQuestion(jeopardyData.question);
		// setAnswer(jeopardyData.answer);
		// setToggle(false);
		console.log(data);
		// console.log(imageURL);

		console.log(
			`https://res.cloudinary.com/ryanphotos/image/upload/v` +
				data.resources[4].version +
				`/` +
				data.resources[4].public_id +
				`.jpg`
		);
	};

	getData();

	const images = [
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550138/zoo-pics/animal-kingdom/lion_side_cu_sept_14_2020_web_ietvw2.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550138/zoo-pics/animal-kingdom/lion_side_cu_sept_14_2020_web_ietvw2.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550234/zoo-pics/animal-kingdom/gorilla_eat_cu_small_dn2zx8.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550234/zoo-pics/animal-kingdom/gorilla_eat_cu_small_dn2zx8.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg'
		},
		{
			original:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550162/zoo-pics/animal-kingdom/tiger_6_sept_14_2020_web_okwdzt.jpg',
			thumbnail:
				'https://res.cloudinary.com/ryanphotos/image/upload/v1616550162/zoo-pics/animal-kingdom/tiger_6_sept_14_2020_web_okwdzt.jpg'
		}
	];

	return (
		<div>
			<ImageGallery items={images} />
		</div>
	);
}
