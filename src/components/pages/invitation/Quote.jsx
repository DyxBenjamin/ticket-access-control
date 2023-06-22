import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";


export default function Quote({quote, author, imageSrc, ...props}) {
    return (
        <MobileScreen
            sx={{border: '4px solid white', background: '#070020', scrollSnapAlign: 'center'}}
            direction={'column'}>
            <FlexColumn center sx={{height: '100%', position: 'relative'}}>
                <FlexColumn center sx={{
                    position: 'absolute',
                    height: '100%',
                    zIndex: 2,
                    textAlign: 'end',
                    padding: '32px',
                    background: 'rgba(0,0,0,0.4)'
                }}>
                    <Typography
                        variant={'h2'}
                        sx={{
                            fontWeight: 'bold',
                            color: 'rgba(255,255,255,100)!important',
                            fontFamily: 'Playfair Display',
                            textAlign: 'center',
                            fontSize: '42px',
                            padding: '0 12px',
                            letterSpacing: '.2rem',
                        }}>
                        {quote}
                    </Typography>
                    {
                        author && <Typography>
                            - {author}
                        </Typography>
                    }
                </FlexColumn>
                <DynamicSizeNextImage src={imageSrc} width={'100%'} height={'100%'}/>
            </FlexColumn>
        </MobileScreen>
    );
}
