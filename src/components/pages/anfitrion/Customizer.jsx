import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import MobileScreen from "@components/layouts/MobileScreen";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import _ from "lodash";


const css = {
    skeleton: {minWidth: '100px',  height: '150px', background: 'gray', borderRadius: '8px', overflow: 'hidden'},
}

export default function Customizer({user}) {
    const defautlInvitation = {
        mainImages: ['https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
        quotes: [
            {
                quote: '“Somos moldeados y modelados por lo que amamos.”',
                author: 'Audrey Hepburn',
                imgUrl: ' https://images.pexels.com/photos/15792907/pexels-photo-15792907/free-photo-of-cielo-ramas-techo-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                quote: '“La arquitectura no es una profesión para los impacientes.”',
                author: 'Peter Eisenman',
                imgUrl: 'https://images.pexels.com/photos/3317535/pexels-photo-3317535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    }

    return (
        <MobileScreen
            sx={{border: '4px solid white', background: '#070020', scrollSnapAlign: 'center'}}
            direction={'column'}>
            <FlexColumn center fullWidth spacing={4} padding={4}>
                <Typography variant={'h6'}> Personalizar mi invitación </Typography>
                <FlexColumn fullWidth center spacing={4}>
                    <FlexColumn center spacing={1}>
                        <Typography>
                            Pantalla principal
                        </Typography>
                        <FlexColumn center>
                            <Typography variant={'caption'}>
                                Puedes personalizar la pantalla principal de tu invitación
                            </Typography>
                            <Typography variant={'caption'}>
                                Carga hasta 3 imagenes o 1 video de hasta 15 segundos
                            </Typography>
                        </FlexColumn>
                    </FlexColumn>
                    <FlexRow fullWidth center>
                        <Box sx={css.skeleton}>
                            <DynamicSizeNextImage src={defautlInvitation.mainImages[0]} width={'100%'} height={'100%'} />
                        </Box>
                        <Box sx={css.skeleton}>
                            <DynamicSizeNextImage src={defautlInvitation.mainImages[0]} width={'100%'} height={'100%'} />
                        </Box>
                        <Box sx={css.skeleton}>
                            <DynamicSizeNextImage src={defautlInvitation.mainImages[0]} width={'100%'} height={'100%'} />
                        </Box>
                    </FlexRow>
                </FlexColumn>

                <FlexColumn fullWidth center spacing={4}>
                    <FlexColumn center>
                        <Typography>
                            Frases
                        </Typography>
                        <Typography variant={'caption'}>
                            Puedes personalizar las pantallas de frases de tu invitación
                        </Typography>
                        <Typography variant={'caption'}>
                            Carga 1 imagen y personaliza el texto
                        </Typography>
                    </FlexColumn>
                    <FlexColumn fullWidth center spacing={2}>
                        {_.map(defautlInvitation.quotes, (quote, index) => (
                            <FlexRow key={index}  fullWidth center={'vertical'}>
                                <Box sx={css.skeleton}>
                                    <DynamicSizeNextImage src={quote.imgUrl} width={'100%'} height={'100%'} />
                                </Box>
                                <FlexColumn fullWidth spacing={2} >
                                    <FlexColumn>
                                        <Typography>
                                            {quote.quote}
                                        </Typography>
                                        <Typography variant={'caption'} >
                                            {quote.author}
                                        </Typography>
                                    </FlexColumn>
                                    <Button variant={'outlined'} >Editar</Button>
                                </FlexColumn>
                            </FlexRow>
                        ))}
                    </FlexColumn>
                </FlexColumn>
                <Button variant={'contained'}> Ver mi invitacion </Button>
            </FlexColumn>
        </MobileScreen>
    );
}
