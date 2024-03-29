import ImageDimensionProvider from "@components/utils/ImageDimensionProvider";
import DimensionProvider from "@components/utils/DimensionProvider";
import React from "react";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import Image from "next/image";
import {Box} from "@mui/material";

const Container = ({dimensions: container, item, onClickItem, itemSx, ...props}) => {
	const {src} = item;

	return <>
		<ImageDimensionProvider src={src}>
			{({width, height}) => {
				const maxWidth = width * (container.height / height);
				const maxHeight = height * (container.width / width);

				const calculatedPadding = (container.height - maxHeight) / 2;

				const onClick = () => { onClickItem && onClickItem(item);}


				return ( <div style={{width:'100%', height:'100%', maxWidth, maxHeight: `${container.height}px`, padding:`${ calculatedPadding > 0 ? calculatedPadding : 0 }px 0`,}} >
					<div style={{ width:'100%', height:'100%', position:'relative' }} >
						<DynamicSizeNextImage src={src}  width={'100%'} height={'100%'} />
					</div>
				</div>)
			}}
		</ImageDimensionProvider>
	</>
}

const CalculatedSizeImage = DimensionProvider(Container);

export default CalculatedSizeImage;
