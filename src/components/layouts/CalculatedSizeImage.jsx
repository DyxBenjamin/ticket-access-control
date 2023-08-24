import ImageDimensionProvider from "@components/utils/ImageDimensionProvider";
import {Box} from "@mui/material";
import DimensionProvider from "@components/utils/DimensionProvider";
import React, {useMemo} from "react";
import Image from "next/image";

const Container = ({dimensions: container, item, onClickItem, itemSx, ...props}) => {
	const {src} = item;

	return <>
		<ImageDimensionProvider src={src}>
			{({width, height}) => {

				const orientation = width > height ? 'landscape' : 'portrait';
				const isSquare = width === height;

				const aspectRatio = width / height;

				const maxWidth = width * (container.height / height);


				const onClick = () => { onClickItem && onClickItem(item);}

				if (isSquare) {
					return <img src={src} alt="asdas" style={{  width:'100%', height:'100%' }} />
				}
				if(orientation === 'portrait'){
					return <img className={'portait'} src={src} alt="" style={{ width:'100%', maxWidth:`${maxWidth}px`, maxHeight:`${container.height}px`,  aspectRatio }} />
				}
				if(orientation === 'landscape'){
					return <img className={'landscape'} src={src} alt=""  style={{ width:'100%', maxWidth:`${maxWidth}px`, maxHeight:`${container.height}px`, aspectRatio }} />
				}

			}}
		</ImageDimensionProvider>
	</>
}

const CalculatedSizeImage = DimensionProvider(Container);

export default CalculatedSizeImage;
