import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";
import HorizontalDivider from "@components/utils/HorizontalDivider";


export default function Menu({guest, ...props}) {
	const menu = {
		regular: {
			firstTime: 'Crujiente de cangrejo',
			secondTime: 'Crema de brócoli',
			main: 'Ave rellena de requesón y espinaca en salsa de chipotle',
			side: 'Ensalada tropical',
		},
		vegan: {
			firstTime: 'Croquetas de zanahoria y calabacin en hummus de betabel',
			secondTime: 'Pasta al pesto',
			main: 'Pimiento relleno de vegetales',
			side: 'Ensalada tropical',
		},
	}
	const guestsMenu = menu[guest?.menu ?? 'regular'];

	return (
		<MobileScreen
			sx={{border: '4px solid white', scrollSnapAlign: 'center'}}
			direction={'column'}>
			<FlexColumn center fullWidth sx={{height: '100vh'}}>
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
					Menu
				</Typography>
				<FlexColumn
					center
					spacing={3}
					padding={2}
					sx={{background: 'white', textAlign:'center', height: '85vh', width: '90%', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}}>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Primer tiempo
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							{guestsMenu.firstTime}
						</Typography>
					</FlexColumn>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Segundo tiempo
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							{guestsMenu.secondTime}
						</Typography>
					</FlexColumn>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Plato principal
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							{guestsMenu.main}
						</Typography>
					</FlexColumn>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Guarnición
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							{guestsMenu.side}
						</Typography>
					</FlexColumn>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Bebidas
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							Refresco y hielo ilimitado
							<br/>
							Descorche libre
						</Typography>
					</FlexColumn>
					<HorizontalDivider/>
					<FlexColumn center>
						<Typography
							color={'#8d8d8d'}
							sx={{
								fontWeight: '600',
								borderTop: '2px solid white',
								borderBottom: '2px solid white',
								letterSpacing: '.4rem',
								fontFamily: 'Quicksand'
							}}>
							Menu infantil
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            letterSpacing: '.1rem',
							            fontFamily: 'Quicksand'
						            }}>
							Mini hamburguesas con papas fritas
						</Typography>
					</FlexColumn>
				</FlexColumn>
			</FlexColumn>
		</MobileScreen>
	);
}
