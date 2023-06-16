import {Box} from "@mui/material";
import Image from "next/image";
import React from "react";


export default function DynamicSizeNextImage({src, width, height}) {
	return (
		<Box sx = { {
			width,
			height,
			background: 'gray',
			position: 'relative'
		} } >
			<Box sx = { {
				position: 'absolute',
				width: '100%',
				height: '100%',
				zIndex: 1
			} } >
				<Image
					src = {src}
					layout = 'fill'
					objectFit = 'cover'
					alt = 'Descripción de la imagen'
				/>
			</Box >
		</Box>
	);
}
