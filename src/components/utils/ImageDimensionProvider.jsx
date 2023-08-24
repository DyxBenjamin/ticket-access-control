import React, {useState, useEffect, useMemo} from 'react';

function ImageDimensionProvider ({ src, children }) {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setDimensions({ width: img.width, height: img.height });
		};
	}, [src]);

	return children({width:dimensions.width , height:dimensions.height , src});
}

export default ImageDimensionProvider;
