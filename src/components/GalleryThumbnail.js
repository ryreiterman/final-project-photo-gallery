import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Image } from 'cloudinary-react';
// import Zoo from '../pages/Zoo';
// import config from '../config';
// import config2 from '../config2';

const GalleryThumbnail = props => {
	const [gallery, setGallery] = useState([]);

	// const galleries = ['/animalkingdom', '/brevardzoo', '/columbuszoo'];
	// console.log(galleries);

	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/tags');
				const data = await response.json();
				console.log(data.tags[1]);
				setGallery(data.tags);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		// <nav className="NavBar">
		// 	{props.routes.map(({ key, path }) => (
		// 		<Link key={key} to={path}>
		// 			{key}
		// 		</Link>
		// 	))}
		// </nav>
		<>
			<div className="thumbnail-container">
				<Link to={`/${gallery[0]}`}>
					{/* <a href="/animalkingdom"> */}
					<img
						src="https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg"
						className="thumbnail"
					/>
					{/* </a> */}
				</Link>
			</div>
		</>
	);
};

export default GalleryThumbnail;
