import React, { useState } from 'react';
import GalleryThumbnail from '../components/GalleryThumbnail';

export default function App(props) {
	return (
		<>
			<GalleryThumbnail {...props} />
		</>
	);
}

// Display all galleries from Cloudinary in grid of thumbnail images
// Grab thumbnail image from 1st item in array, link to tag name, click on thumbnail takes you to gallery url

//Gallery thumbnail React component

//
