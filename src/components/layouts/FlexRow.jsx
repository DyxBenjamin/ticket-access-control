import React from 'react';
import {Stack} from "@mui/material";
export default function FlexRow({children, fullWidth,  ...props}) {
	if (fullWidth){
		props = {...props, sx:{width:'100%', ...props.sx}}
	}
	return (
		<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2} {...props} >
			{ children }
		</Stack>
	)
}
