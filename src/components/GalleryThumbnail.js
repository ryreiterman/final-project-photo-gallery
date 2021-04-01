import React from 'react';
import { Link } from 'react-router-dom';

const GalleryThumbnail = props => {
	const galleries = ['/animalkingdom', '/brevardzoo', '/columbuszoo'];
	console.log(galleries);
	return (
		// <nav className="NavBar">
		// 	{props.routes.map(({ key, path }) => (
		// 		<Link key={key} to={path}>
		// 			{key}
		// 		</Link>
		// 	))}
		// </nav>

		<div className="thumbnail-container">
			<a href="/animalkingdom">
				<img
					src="https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg"
					className="thumbnail"
				/>
			</a>
		</div>
	);
};

export default GalleryThumbnail;
