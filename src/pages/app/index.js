import React from 'react';
import {Box, Typography} from "@mui/material";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import FlexRow from "@components/layouts/FlexRow";
import Nav from "@components/nav/Nav";

export default function Index(){
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter()
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			router.push('/')
		},
	})

	if (status === "loading") {
		return "Loading or not authenticated..."
	}

	return(
		<Box sx={{ width:'100%' }} >
			<FlexRow>
				<Typography onClick = {() => signOut()} >
					Sign out
				</Typography>
			</FlexRow>
			<Typography>
				User is logged in
			</Typography>
		</Box>
	)
}

Index.getLayout = function getLayout(page) {
	return (
		<Nav>{page}</Nav>
	)
}
