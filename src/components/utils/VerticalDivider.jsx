import React from 'react';
import {Box} from "@mui/material";


const css = {
	divider:{
		width:'1px',
		height:'100%',
		backgroundColor:'rgba(0,0,0,0.3)',
		margin:'0 1rem'
	}
}
export default function VerticalDivider({...props}) {
	return (
		<Box sx={ css.divider } >
		</Box>
	);
}
