import React from 'react';
import { Stack, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function FlexColumn({children, fullWidth, center, transpose, padding, ...props}) {
	const theme = useTheme();

	const { breakpoint, option  } = transpose || { breakpoint:'sm', option:'down' };
	let breakpointReached = useMediaQuery(theme.breakpoints[option](breakpoint))
	if ( !transpose ) breakpointReached = false;

	if ( center === true ) props = {...props, sx:{justifyContent:'center', alignItems:'center', ...props.sx} }
	if ( center === 'vertical' ) props = {...props, sx:{justifyContent:'center', ...props.sx} }
	if ( center === 'horizontal' ) props = {...props, sx:{ alignItems:'center', ...props.sx} }

	if ( fullWidth ) props = {...props, sx:{width:'100%', ...props.sx} }

	if ( padding ) props = {...props, sx:{padding: typeof padding === 'string' ? padding : `${padding * 8}px`, ...props.sx} }

	return (
		<Stack direction={breakpointReached ? 'row' : 'column'} {...props} >
			{ children }
		</Stack>
	)
}
