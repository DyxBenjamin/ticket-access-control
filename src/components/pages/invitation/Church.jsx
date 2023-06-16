import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import FlexColumn from "@components/layouts/FlexColumn";
import Church from "@assets/images/church.png";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import DynamicSizeIframe from "@components/utils/DynamicSizeIframe";

export default function Hall({}) {
	return (
		<MobileScreen
			sx = { { border: '4px solid white', background:'#f3e5e9', scrollSnapAlign: 'center'} }
			direction = { 'column' } >
			<FlexColumn center spacing={2} >
				<DynamicSizeNextImage src={Church} width={'100%'} height={'30vh'} />
				<Typography>
					Basílica Menor de Santa María de Guadalupe
				</Typography>
				<Typography>

				</Typography>
				<DynamicSizeIframe
					sx={{borderRadius: '12px', margin: '0px 0px 0px'}}
					width={'45vh'}
					height={'35vh'}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.4532390052757!2d-98.74179674447728!3d20.1191516958352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fff3f29d13%3A0x8d8198734a7c89e0!2sBas%C3%ADlica%20Menor%20de%20Santa%20Mar%C3%ADa%20de%20Guadalupe-La%20Villita!5e0!3m2!1ses-419!2smx!4v1686895508218!5m2!1ses-419!2smx"/>
			</FlexColumn>
		</MobileScreen >
	);
}
