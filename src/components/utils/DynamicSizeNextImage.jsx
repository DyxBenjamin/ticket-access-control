import {Box} from "@mui/material";
import Image from "next/legacy/Image";
import React from "react";


export default function DynamicSizeNextImage({src, width, height, ...props}) {
	return (
		<Box sx = { {
			width,
			height,
			background: 'gray',
			position: 'static',
		} } >
			<Box sx = { {
				position: 'relative',
				width: '100%',
				height: '100%',
				zIndex: 1,
				"& span": {
					position: 'static !important',
				}
			} } >
				<Image
					src = {src}
					layout = 'responsive'
					objectFit = 'contain'
					alt = 'Descripción de la imagen'
					priority
					width = { width }
					height = { height }
				/>
			</Box >
		</Box>
	);
}
