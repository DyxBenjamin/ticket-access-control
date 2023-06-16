import React from 'react';
import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import MobileScreen from "@components/layouts/MobileScreen";
import QRCode from "react-qr-code";


export default function Ticket({guest, user}) {

	const guestFullName = `${guest?.profile?.name} ${guest?.profile?.secondName ?? ''} ${guest?.profile?.lastName} ${guest?.profile?.secondLastName ?? ''}`;

	return (
		<MobileScreen
			sx={{border: '4px solid white', background: '#829799', scrollSnapAlign: 'center'}}
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
						color: 'rgba(255,255,255,0.8)',
						fontSize: '28px'
					}}>
					Ticket de acceso
				</Typography>
				<FlexColumn
					center
					spacing={2}
					sx={{background: 'white', height: '30vh', width: '90%', borderRadius: '30px', borderBottom: '2px dashed gray', boxShadow:'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}}>
					<QRCode
						size={256}
						style={{height: "180px", width: "180px"}}
						viewBox={`0 0 256 256`}
						value={user.accessLink}/>
					<Typography variant={'h6'}
					            color={'#000'}
					            sx={{
						            fontWeight: '600',
						            borderTop: '2px solid white',
						            borderBottom: '2px solid white',
						            letterSpacing: '.1rem',
						            fontFamily: 'Quicksand'
					            }}>
						{guestFullName}
					</Typography>
				</FlexColumn>
				<FlexColumn
					spacing={2}
					center
					sx={{background: 'white', height: '50vh', width: '90%', borderRadius: '30px', padding: '30px', boxShadow:'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}}>
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
							Fecha
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            borderTop: '2px solid white',
							            borderBottom: '2px solid white',
							            letterSpacing: '.4rem',
							            fontFamily: 'Quicksand'
						            }}>
							07 de Julio
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
							Hora
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            borderTop: '2px solid white',
							            borderBottom: '2px solid white',
							            letterSpacing: '.4rem',
							            fontFamily: 'Quicksand'
						            }}>
							20:00 hrs
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
							Salon
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            borderTop: '2px solid white',
							            borderBottom: '2px solid white',
							            letterSpacing: '.4rem',
							            fontFamily: 'Quicksand'
						            }}>
							Hacienda
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
							Mesa
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            borderTop: '2px solid white',
							            borderBottom: '2px solid white',
							            letterSpacing: '.4rem',
							            fontFamily: 'Quicksand'
						            }}>
							{guest?.table ?? 'Pendiente'}
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
							Dress Code
						</Typography>
						<Typography variant={'h6'}
						            color={'#000'}
						            sx={{
							            fontWeight: '600',
							            borderTop: '2px solid white',
							            borderBottom: '2px solid white',
							            letterSpacing: '.4rem',
							            fontFamily: 'Quicksand'
						            }}>
							Formal
						</Typography>
					</FlexColumn>
				</FlexColumn>
			</FlexColumn>
		</MobileScreen>
	);
}
