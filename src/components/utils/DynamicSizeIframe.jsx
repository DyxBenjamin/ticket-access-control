import {Box} from "@mui/material";


export default function DynamicSizeIframe({src, width = '100%', height= '100%', sx, ...props}) {
	return (
		<Box sx={{ width, height, position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', ...sx }}>
			<iframe
				src={src}
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
			/>
		</Box>
	);
}
