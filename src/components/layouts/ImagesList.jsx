import _ from "lodash";
import ImageDimensionProvider from "@components/utils/ImageDimensionProvider";
import {Box, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import DimensionProvider from "@components/utils/DimensionProvider";
import React from "react";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlexRow from "@components/layouts/FlexRow";

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
									// boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
									borderRadius: 1,
									overflow: 'hidden',
									cursor:'pointer',
									position:'relative',
									height: 'auto',
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
								<FlexColumn fullWidth>
									<FlexRow fullWidth sx={{justifyContent:'space-between'}} >
										<Typography color='#000' variant={'body2'}>{image.title}</Typography>
										<FavoriteBorderIcon sx={{marginLeft:'auto'}}/>
									</FlexRow>
									<Typography color='#000' variant={'body2'}>Artista</Typography>
									<Typography color='#000' variant={'body2'}>$mucho varo</Typography>
								</FlexColumn>

							</Box>
						</>)
					}}
				</ImageDimensionProvider>)
		})
	}
	return <FlexColumn spacing={4} {...props} >
		{renderImages()}
	</FlexColumn>;
}

const ImagesList = DimensionProvider(Column);

export default ImagesList;
