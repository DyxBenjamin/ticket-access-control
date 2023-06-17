import {Box} from "@mui/material";


export default function DynamicSizeIframe({src, width = '100%', height= '100%', sx, ...props}) {
	const handleClick = (e) => {
		window.open(src, '_blank');
	}

	return (
		<Box onClick={handleClick} sx={{ width, height, position: 'relative', paddingBottom: '60.25%', overflow: 'hidden', ...sx }}>
			<iframe
				src={src}
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
			/>
		</Box>
	);
}
