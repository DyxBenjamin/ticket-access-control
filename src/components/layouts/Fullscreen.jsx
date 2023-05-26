import React from 'react';
import {Box} from "@mui/material";
export default function Fullscreen({children, sx, ...props}) {
    return (
        <Box
            component={'section'}
            sx={{
                display:'flex',
                width:'100vw',
                height:'100vh',
                ...sx
                }}
            {...props}>
            { children }
        </Box>
    )
}
