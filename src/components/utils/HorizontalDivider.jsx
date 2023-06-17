import React,{useState} from 'react';
import {Box, Typography} from "@mui/material";

const css = {
	divider:{
		width:'100%',
		height:'1px',
		backgroundColor:'rgba(0,0,0,0.3)',
		margin:'1rem 0'
	}
}
export default function HorizontalDivider({...props}) {
	return (
		<Box sx={css.divider}  >
		</Box>
	);
}
