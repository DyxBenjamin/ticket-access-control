import React from 'react';
import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import _ from 'lodash';

export default function Customizer({user}) {

	return (

		<FlexColumn center fullWidth spacing={2}>
			<Typography variant={'h6'} > Personalizar mi invitación </Typography>
			<FlexColumn center spacing={1}>
			</FlexColumn>
		</FlexColumn>
	);
}
