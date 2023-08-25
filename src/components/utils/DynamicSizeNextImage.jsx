import {Box} from "@mui/material";
import Image from "next/legacy/Image";
import React from "react";


export default function DynamicSizeNextImage({src, width, height, ...props}) {
	return (
		<Box sx = { {
			width,
			height,
			position: 'static',
		} } >
			<Box sx = { {
				position: 'relative',
				width: '100%',
				height: '100%',
				boxShadow: '4px 4px 10px rgba(0,0,0,0.4)',
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
