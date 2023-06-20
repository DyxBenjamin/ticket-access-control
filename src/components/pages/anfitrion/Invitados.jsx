import React from 'react';
import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import _ from 'lodash';
import FlexRow from "@components/layouts/FlexRow";

export default function Invitados({user}) {

	const shareToWhatsapp = (route) => {
		const url = `https://api.whatsapp.com/send?text=${route}`;
		window.open(url, '_blank');
	}

	const renderGuests = () => {
		const {guests} = user;
		return _.map(guests, (guest, index) => {
			const shareRoute = `https://ticket-access-control.aritectura.com/invitados/${user.accessLink}/${guest.accessLink}`;
			return (
				<FlexRow onClick={()=>shareToWhatsapp(shareRoute)} >
					<Typography  key={index}>
						{guest.profile.name}
					</Typography>

				</FlexRow>
			)
		})
	}

	return (

		<FlexColumn center fullWidth spacing={2}>
			<Typography variant={'h6'} > Invitados </Typography>
			<FlexColumn center spacing={1}>
				{renderGuests()}
			</FlexColumn>
		</FlexColumn>
	);
}
