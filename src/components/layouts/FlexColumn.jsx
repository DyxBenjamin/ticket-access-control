import React from 'react';
import {Stack} from "@mui/material";
export default function FlexColumn({children, fullWidth, ...props}) {
	if (fullWidth){
		props = {...props, sx:{width:'100%', height:'100%', ...props.sx}}
	}

	return (
		<Stack direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={3} {...props} >
			{ children }
		</Stack>
	)
}
