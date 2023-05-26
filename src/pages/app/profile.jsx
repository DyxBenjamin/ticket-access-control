import React from 'react';
import {Box, Typography} from "@mui/material";
import Navigation from "@components/nav/Navigation";

export default function Profile() {
    return (
        <Box>
            <Typography>
                Profile
            </Typography>
        </Box>
    )
}

Profile.getLayout = function getLayout(page) {
    return (
        <Navigation>
            {page}
        </Navigation>
    )
}
