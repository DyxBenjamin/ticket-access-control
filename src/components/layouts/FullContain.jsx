import React from 'react';
import { Box } from '@mui/material';


export default function FullContain({children, sx, center, ...props}) {
    if ( center ) sx = Object.assign( sx, {justifyContent:'center', alignItems:'center'} );

    return (
        <Box
            component={'div'}
            sx={{
                display:'flex',
                flexDirection:'column',
                width:'100%',
                height:'100vh',
                overflowY: 'scroll',
                ...sx
            }}
            {...props}>
            { children }
        </Box>
    )
}
