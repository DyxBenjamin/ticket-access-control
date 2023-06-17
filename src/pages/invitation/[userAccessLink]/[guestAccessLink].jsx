import React, { useRef } from 'react';
import MobileScreen from '@components/layouts/MobileScreen';
import { Box, Typography } from '@mui/material';
import FlexColumn from '@components/layouts/FlexColumn';
import FlexRow from '@components/layouts/FlexRow';
import Image from 'next/image';
import fetchStaticData from '@utils/fetchStaticData';
import FullContain from '@components/layouts/FullContain';
import Main from "@components/pages/invitation/Main";
import Ticket from "@components/pages/invitation/Ticket";
import Church from "@components/pages/invitation/Church";
import Hall from "@components/pages/invitation/Hall";
import Menu from "@components/pages/invitation/Menu";
import Itinerary from "@components/pages/invitation/Itinerary";
import Hotels from "@components/pages/invitation/Hotels";
import Quote from "@components/pages/invitation/Quote";


export default function GuestAccessLink({user, guest}) {

	return (
		<FullContain
			sx = {{
				background: 'black',
				scrollSnapType: 'y mandatory',
				 }} >
			<Main user={user} />
			<Ticket user={user} guest={guest} />
			<Hall/>
			<Church/>
			<Quote
				quote={'“Somos moldeados y modelados por lo que amamos.”'}
				author={'Audrey Hepburn'}
				imageSrc={'https://images.pexels.com/photos/15792907/pexels-photo-15792907/free-photo-of-cielo-ramas-techo-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
			<Menu guest={guest} />
			<Itinerary/>
			<Quote
				quote={'“La arquitectura no es una profesión para los impacientes.”'}
				author={'Peter Eisenman'}
				imageSrc={'https://images.pexels.com/photos/3317535/pexels-photo-3317535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
			<Hotels/>
		</FullContain >
		 );
}

export async function getServerSideProps(context) {
	const { userAccessLink, guestAccessLink } = context.params;
	
	const user = await fetchStaticData({
		collection: 'users',
		singleton: true,
		filters: {
			'accessLink': userAccessLink
		},
	})

	const guest = await fetchStaticData({
		collection: 'guests',
		singleton: true,
		filters: {
			'accessLink': guestAccessLink
		},
	})
	
	return { props: { user, guest } };
}


