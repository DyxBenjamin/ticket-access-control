import React from 'react';
import {Box} from "@mui/material";
export default function FullContain({children, sx, ...props}) {
    return (
        <Box
            component={'div'}
            sx={{
                display:'flex',
                width:'100%',
                height:'100%',
                ...sx
            }}
            {...props}>
            { children }
        </Box>
    )
}
