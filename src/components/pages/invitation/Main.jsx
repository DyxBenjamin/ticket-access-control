import {Box, Typography} from "@mui/material";
import Image from "next/image";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";


export default function Main({user, guest}) {
	const fullname = `${user?.profile?.name} ${user?.profile?.secondName ?? ''} ${user?.profile?.lastName} ${user?.profile?.secondLastName ?? ''}`;
	return (
		<MobileScreen
			sx = { { border: '4px solid white', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<Box sx = { {
				width: '100%',
				height: '60vh',
				background: 'gray',
				position: 'relative'
			} } >
				<Box sx = { {
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 1
				} } >
					<Image
						src = { 'https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
						layout = 'fill'
						objectFit = 'cover'
						alt = 'Descripción de la imagen'
						priority
					/>
				</Box >
				<FlexColumn sx = { {
					width: '100%',
					height: 'calc(100% - 20vh)',
					alignItems: 'center',
					padding: '14px',
					paddingTop: '24px',
					position: 'relative',
					zIndex: 2
				} } spacing = { 0 } >
					<Typography
						sx = { {
							width: '100%',
							textAlign: 'center',
							fontFamily: 'Quicksand',
							letterSpacing: '.4rem',
							fontSize:'12px',
							color: '#fff'
						} }>
						GENERACION 2018 - 2023
					</Typography >
					<Typography
						variant = { 'h4' }
						sx = { {
							letterSpacing: '.2rem',
							fontFamily: 'Train One',
							width: '100%',
							textAlign: 'center',
							padding: '12px 0',
							paddingTop: '4px',
							color: 'rgba(255,255,255,0.8)',
							fontSize:'28px'
						} } >
						ARQUITECTURA
					</Typography >
				</FlexColumn >
				<FlexColumn
					center
					sx = { {
						width: '100%',
						height: '20vh',
						background: 'linear-gradient(0deg, rgba(0,0,0,255) 40%, rgba(0,0,0,0) 100%)',
						position: 'relative',
						zIndex: 2
					} } >
					<Typography
						variant = { 'h4' }
						sx = { {
							fontWeight: '400',
							color: 'rgba(255,255,255,100)!important',
							fontFamily: 'Playfair Display',
							textAlign: 'center',
							fontSize: '28px',
							padding:'0 12px',
							letterSpacing: '.2rem',
						} } >
						Arq. { fullname }
					</Typography >
				</FlexColumn >
			</Box >
			<FlexColumn sx = { { padding: '0 24px' } } spacing={4} >
				<Typography sx = { {
					color: 'rgba(255,255,255,100)!important',
					textAlign: 'center',
					fontFamily: 'Quicksand',
					fontSize:'14px'
				} } >
					Te invita cordialmente a celebrar la culminación de un viaje lleno de pasión, dedicación y creatividad.
				</Typography >

				<FlexRow center >
					<Typography variant = { 'h5' }
					            sx = { {
						            fontWeight: '600',
						            color: 'rgba(255,255,255,100)!important',
						            padding: '18px 0',
						            borderTop: '2px solid white',
						            borderBottom: '2px solid white',
						            letterSpacing: '.4rem',
						            fontFamily: 'Quicksand'
					            } } >
						07 de Julio  20:00
					</Typography >
				</FlexRow >
				<Typography variant = { 'caption' }
				            sx = { {
					            color: 'rgba(255,255,255,100)!important',
					            textAlign: 'center',
					            fontFamily: 'Quicksand',
					            fontSize:'14px'
				            } } >
					Este es un día para reconocer los largos días de estudio, los proyectos exhaustivos y la innegable contribución al mundo del diseño y la construcción.
				</Typography >
			</FlexColumn >
		</MobileScreen >
	);
}
