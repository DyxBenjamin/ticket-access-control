import React from 'react';
import { Stack, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function FlexColumn({children, fullWidth, center, transpose, ...props}) {
	const theme = useTheme();
	
	const { breakpoint, option  } = transpose || { breakpoint:'sm', option:'down' };
	let breakpointReached = useMediaQuery(theme.breakpoints[option](breakpoint))
	if ( !transpose ) breakpointReached = false;
	
	if ( center ) props = {...props, sx:{justifyContent:'center', alignItems:'center', ...props.sx} }
	if ( fullWidth ) props = {...props, sx:{width:'100%', ...props.sx} }
	

	return (
		<Stack direction={breakpointReached ? 'row' : 'column'} spacing={3} {...props} >
			{ children }
		</Stack>
	)
}
