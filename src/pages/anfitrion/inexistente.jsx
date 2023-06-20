import React from 'react';
import FullContain from "@components/layouts/FullContain";
import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import MobileScreen from "@components/layouts/MobileScreen";


export default function Inexistente() {
	return (
		<FullContain
			sx={{
				background: 'black',
				scrollSnapType: 'y mandatory',
			}}>
			<MobileScreen
				sx={{border: '4px solid white', scrollSnapAlign: 'center'}}
				direction={'column'}>
				<FlexColumn center fullWidth sx={{height: '100vh', overflow: 'scroll'}} padding={4}>
					<FlexColumn spacing={1} >
						<Typography
							variant={'h4'}
							sx={{
								letterSpacing: '.2rem',
								fontFamily: 'Quicksand',
								width: '100%',
								textAlign: 'center',
								color: 'white',
								fontSize: '28px'
							}}>
							Ups!
						</Typography>
						<Typography
							variant={'h4'}
							sx={{
								letterSpacing: '.1rem',
								fontFamily: 'Quicksand',
								width: '100%',
								textAlign: 'center',
								color: 'white',
								fontSize: '28px'
							}}>
							No encontramos tu usuario
						</Typography>
					</FlexColumn>
					<FlexColumn spacing={1} padding={4}>
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
							Revisa tu enlace de acceso
						</Typography>
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
							o
						</Typography>
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
							contacta a tu anfitrión
						</Typography>
					</FlexColumn>
				</FlexColumn>
			</MobileScreen>
		</FullContain>
	)
}
