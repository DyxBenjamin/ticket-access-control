import React from 'react';
import {Box} from "@mui/material";
export default function MobileScreen({children, sx, direction, center, ...props}) {
	if ( direction ) sx = Object.assign( sx, {flexDirection: direction} );
	if ( center ) sx = Object.assign( sx, {justifyContent:'center', alignItems:'center'} );
	
	return (
		<Box
			component={'section'}
			sx={{
				display: 'flex',
				height: '100vh',
				maxWidth: 'calc(100vh * 0.5625)',
				width:'-webkit-fill-available',
				...sx
			}}
			>
			<Box sx={{ height: '100vh', minWidth:'100%' }} {...props} >
				{ children }
			</Box>
        </Box>
	)
}
