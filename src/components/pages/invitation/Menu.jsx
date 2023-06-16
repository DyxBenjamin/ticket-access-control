import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";


export default function Menu({guests, ...props}) {
	const menu = {
		regular:{
			firstTime: 'Crujiente de cangrejo',
			secondTime: 'Crema de brócoli',
			main:'Ave rellena de requesón y espinaca en salsa de chipotle',
			side:'Ensalada tropical',
		},
		vegan:{
			firstTime: 'Croquetas de zanahoria y calabacin en hummus de betabel',
			secondTime: 'Pasta al pesto',
			main:'Pimiento relleno de vegetales',
			side:'Ensalada tropical',
		},
	}

	const guestsMenu = menu[guests?.menu ?? 'regular'];


	return (
		<MobileScreen
			sx = { { border: '4px solid white', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<FlexColumn center fullWidth sx={{height: '100vh'}}>
				<Typography
					variant={'h4'}
					sx={{
						letterSpacing: '.2rem',
						fontFamily: 'Quicksand',
						width: '100%',
						textAlign: 'center',
						paddingBottom: '24px',
						color: 'rgba(255,255,255,0.8)',
						fontSize: '28px'
					}}>
					Menu
				</Typography>
				<FlexColumn
					center
					spacing={2}
					sx={{background: 'white', height: '80vh', width: '90%', borderRadius: '8px', boxShadow:'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}}>

				</FlexColumn>
			</FlexColumn>
		</MobileScreen >
	);
}
