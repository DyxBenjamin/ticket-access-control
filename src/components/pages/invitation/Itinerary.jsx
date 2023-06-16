import react,{useState} from 'react';
import {Box, Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";


export default function Itinerary({...props}) {
	return (
		<MobileScreen
			sx = { { border: '4px solid white', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<Typography variant={'h1'}>Itinerary</Typography>
		</MobileScreen >
	);
}
