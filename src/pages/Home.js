import React, { useState } from 'react';
import GalleryThumbnail from '../components/GalleryThumbnail';

// Display all galleries from Cloudinary in grid of thumbnail images
// Grab thumbnail image from 1st item in array, link to tag name, click on thumbnail takes you to gallery url

export default function App(props) {
	return (
		<>
			<div className="home-wrapper">
				<GalleryThumbnail {...props} />
			</div>
		</>
	);
}
