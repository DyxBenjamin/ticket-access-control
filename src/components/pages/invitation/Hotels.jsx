import react,{useState} from 'react';
import {Box, Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";


export default function Hotels({...props}) {
	return (
		<MobileScreen
			sx = { { border: '4px solid white', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<FlexColumn center fullWidth sx={{height: '100vh', overflow:'scroll'}} padding={2}>
				<Typography
					variant={'h4'}
					sx={{
						letterSpacing: '.2rem',
						fontFamily: 'Quicksand',
						width: '100%',
						textAlign: 'center',
						paddingBottom: '24px',
						color: 'white',
						fontSize: '28px'
					}}>
					Recomendaciones
				</Typography>
				<FlexColumn>
					<Typography
						variant={'h4'}
						sx={{
							letterSpacing: '.1rem',
							fontFamily: 'Quicksand',
							width: '100%',
							textAlign: 'center',
							color: 'white',
							fontSize: '16px'
						}}>
						Guía de hoteles
					</Typography>
					<Typography>
					</Typography>
				</FlexColumn>
				<FlexColumn>
					<Typography
						variant={'h4'}
						sx={{
							letterSpacing: '.1rem',
							fontFamily: 'Quicksand',
							width: '100%',
							textAlign: 'center',
							color: 'white',
							fontSize: '16px'
						}}>

					</Typography>
					<Typography>
					</Typography>
				</FlexColumn>
				<FlexColumn>
					<Typography
						variant={'h4'}
						sx={{
							letterSpacing: '.1rem',
							fontFamily: 'Quicksand',
							width: '100%',
							textAlign: 'center',
							color: 'white',
							fontSize: '16px'
						}}>
						Numeros de emergencia
					</Typography>
					<Typography>

					</Typography>
				</FlexColumn>

			</FlexColumn>
		</MobileScreen >
	);
}
