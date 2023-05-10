import React from 'react';
import {Box, Typography} from "@mui/material";
import {signOut} from "next-auth/react";
import FlexRow from "@components/layouts/FlexRow";
import Navigation from "@components/nav/Navigation";

export default function Index(){

	return(
		<Box sx={{ width:'100%' }} >
			<FlexRow>
				<Typography onClick = {() => signOut()} >
					Sign out
				</Typography>
			</FlexRow>
		</Box>
	)
}

Index.getLayout = function getLayout(page) {
	return (
		<Navigation>{page}</Navigation>
	)
}
