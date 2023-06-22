import React from 'react';
import {Typography} from "@mui/material";
import MobileScreen from "@components/layouts/MobileScreen";
import FlexColumn from "@components/layouts/FlexColumn";


export default function Hotels({}) {
    return (
        <MobileScreen
            sx={{border: '4px solid white', scrollSnapAlign: 'center'}}
            direction={'column'}>
            <FlexColumn center fullWidth sx={{height: '100vh', overflow: 'scroll'}} padding={2} spacing={6}>
                <Typography
                    variant={'h4'}
                    sx={{
                        letterSpacing: '.2rem',
                        fontFamily: 'Quicksand',
                        width: '100%',
                        textAlign: 'center',
                        paddingBottom: '24px',
                        color: 'white',
                        fontSize: '28px'
                    }}>
                    Recomendaciones
                </Typography>
                <FlexColumn spacing={3} center>
                    <Typography
                        variant={'h4'}
                        sx={{
                            letterSpacing: '.1rem',
                            fontFamily: 'Quicksand',
                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '16px'
                        }}>
                        Guía de hoteles
                    </Typography>
                    <FlexColumn spacing={1} center >
                        <Typography  >
                            Hotel del Valle Inn
                        </Typography>
                        <Typography>
                            <a target={'_blank'} rel={'noreferrer'}
                               href={'https://www.hoteldelvalleinn.com'}>https://www.hoteldelvalleinn.com</a>
                        </Typography>
                    </FlexColumn>
                    <FlexColumn spacing={1} center >
                        <Typography>
                            Hotel Fiesta Mexicana
                        </Typography>
                        <Typography>
                            <a target={'_blank'} rel={'noreferrer'}
                               href={'http://www.hotelfiestamexicana.com.mx'}> http://www.hotelfiestamexicana.com.mx </a>
                        </Typography>
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn center spacing={2}>
                    <Typography
                        variant={'h4'}
                        sx={{
                            letterSpacing: '.1rem',
                            fontFamily: 'Quicksand',
                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '16px'
                        }}>
                        Numeros de emergencia
                    </Typography>
                    <Typography>
                        Emergencias: 911
                    </Typography>
                    <Typography>
                        Cruz Roja: 55 53 95 11 11
                    </Typography>
                    <Typography>
                        Protección Civil: 55 51 28 00 00
                    </Typography>
                    <Typography>
                        Mecánico: 771 371 9688
                    </Typography>
                </FlexColumn>
            </FlexColumn>
        </MobileScreen>
    );
}
