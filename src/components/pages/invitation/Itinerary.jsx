import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import _ from "lodash";
import HorizontalDivider from "@components/utils/HorizontalDivider";
import VerticalDivider from "@components/utils/VerticalDivider";


export default function Itinerary({...props}) {
	const program = [
		{
			time: '07:00',
			timeSuffix: 'pm',
			title: 'Misa de agradecimiento',
		},
		{
			time: '08:00',
			timeSuffix: 'pm',
			title: 'Acceso de invitados',
		},
		{
			time: '08:50',
			timeSuffix: 'pm',
			title: 'Proyección de video de bienvenida',
		},
		{
			time: '08:55',
			timeSuffix: 'pm',
			title: 'Entrada de los graduados',
		},
		{
			time: '09:00',
			timeSuffix: 'pm',
			title: 'Cena',
			description: 'Acompañada por saxofonista',
		},
		{
			time: '10:00',
			timeSuffix: 'pm',
			title: 'Pase de lista y palabras de despedida',
			description: 'A cargo de Arq. Juana Barrón y Arq. Joselyn Santiago',
		},
		{
			time: '10:40',
			timeSuffix: 'pm',
			title: 'Brindis',
		},
		{
			time: '11:00',
			timeSuffix: 'pm',
			title: 'Proyección de video de generación',
		},
		{
			time: '11:10',
			timeSuffix: 'pm',
			title: 'Baile',
			description: 'A cargo del grupo musical versatil',
		},
		{
			time: '03:10',
			timeSuffix: 'am',
			title: 'Fin de la fiesta y desalojo del salón',
		}
	]


	const renderProgram = () => {
		return _.map(program, (item, index) => {
			return (
				<FlexColumn key={index}  >
					<FlexRow fullWidth>
						<FlexColumn center >
							<Typography color={"#000"} >
								{item.time}
							</Typography>
							<Typography color={"#000"} sx={{ fontSize:'10px' }} >
								{item.timeSuffix}
							</Typography>
						</FlexColumn>
						<VerticalDivider/>
						<FlexColumn center={'vertical'} fullWidth>
							<Typography color={"#000"} >
								{item.title}
							</Typography>
							<Typography color={"#000"} sx={{ fontSize:'10px' }} >
								{item?.description ?? ''}
							</Typography>
						</FlexColumn>
					</FlexRow>
					<HorizontalDivider/>
				</FlexColumn>

			)
		})
	}

	return (
		<MobileScreen
			sx = { { border: '4px solid white', scrollSnapAlign: 'center', background:'white'} }
			direction = { 'column' } >
			<FlexColumn fullWidth sx={{height: '100vh', overflow:'scroll'}} padding={2}>
				<Typography
					variant={'h4'}
					sx={{
						letterSpacing: '.2rem',
						fontFamily: 'Quicksand',
						width: '100%',
						textAlign: 'center',
						color: '#000',
						fontSize: '28px'
					}}>
					Programa
				</Typography>
				<FlexColumn>
					<HorizontalDivider/>
					{renderProgram()}
				</FlexColumn>
			</FlexColumn>
		</MobileScreen >
	);
}
