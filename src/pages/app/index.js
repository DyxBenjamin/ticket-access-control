import React from 'react';
import {Box, Typography} from "@mui/material";
import {signOut} from "next-auth/react";
import FlexRow from "@components/layouts/FlexRow";
import Nav from "@components/nav/Nav";

export default function Index(){

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
