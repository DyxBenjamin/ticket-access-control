import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";
import Salon from "@assets/images/Salon.png";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import DynamicSizeIframe from "@components/utils/DynamicSizeIframe";

export default function Hall({...props}) {
	return (
		<MobileScreen
			sx = { { border: '4px solid white', background:'#070020', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<FlexColumn sx={{ height:'100vh', justifyContent:'space-between' }} center spacing={2} >
				<DynamicSizeNextImage src={Salon} width={'100%'} height={'30vh'} />
				<FlexColumn center spacing={2} padding={2}>
					<Typography>
						Las noches de estudio y esfuerzo se convertirán en una noche de alegría y celebración en Hacienda Santa Cecilia. Únete a nosotros para festejar los logros alcanzados y brindar por los sueños que están por cumplirse
					</Typography>
				</FlexColumn>
				<DynamicSizeIframe
					sx={{borderRadius: '24px 24px 0 0', margin: '0px 0px 0px'}}
					width={'45vh'}
					height={'35vh'}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5335.9274722310465!2d-98.69902911234416!3d20.091938550122034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a10b63a872d3%3A0x3c1185a3798a337e!2sHacienda%20Santa%20Cecilia!5e0!3m2!1ses-419!2smx!4v1686893965215!5m2!1ses-419!2smx"/>
			</FlexColumn>
		</MobileScreen >
	);
}
