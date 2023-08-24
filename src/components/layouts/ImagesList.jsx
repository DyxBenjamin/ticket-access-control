import _ from "lodash";
import ImageDimensionProvider from "@components/utils/ImageDimensionProvider";
import {Box} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import DimensionProvider from "@components/utils/DimensionProvider";
import React from "react";
import Image from "next/image";

const Column = ({dimensions: container, list, onClickItem, itemSx, ...props}) => {
	const renderImages = () => {
		return _.map(list, (image, index) => {
			return (
				<ImageDimensionProvider
					className={'image-container'}
					key={index}
					src={image.src}>
					{({width, height, src}) => {
						const calculateHeight = () => {
							return (container.width * height) / width || 0;
						}
						const onClick = () => { onClickItem && onClickItem(image);}
						return (<>
							<Box
								onClick={onClick}
								sx={{
									boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
									borderRadius: 1,
									overflow: 'hidden',
									cursor:'pointer',
									position:'relative',

									height: calculateHeight(),
									...itemSx
								}}>
								{ container &&
									<Image
										src = {image.src}
										alt = 'Descripción de la imagen'
										priority
										layout={'responsive'}
										width = {container.width}
										height = {calculateHeight()}
									/>}
							</Box>
						</>)
					}}
				</ImageDimensionProvider>)
		})
	}
	return <FlexColumn spacing={2} {...props} >
		{renderImages()}
	</FlexColumn>;
}

const ImagesList = DimensionProvider(Column);

export default ImagesList;
