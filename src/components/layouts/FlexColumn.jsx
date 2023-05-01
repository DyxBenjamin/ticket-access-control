import React from 'react';
import {Stack} from "@mui/material";
export default function FlexRow({props}) {
	return (
		<Stack direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={2} {...props} />
	)
}
