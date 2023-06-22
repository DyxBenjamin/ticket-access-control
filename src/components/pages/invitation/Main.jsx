import { Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import MobileScreen from "@components/layouts/MobileScreen";
import React from "react";
import {ImageSwiper} from "@components/modals/ImageSwipper";


export default function Main({user}) {
    const fullname = `${user?.profile?.name} ${user?.profile?.secondName ?? ''} ${user?.profile?.lastName} ${user?.profile?.secondLastName ?? ''}`;
    const {settings} = user;

    return (
        <MobileScreen
            sx={{border: '4px solid white', scrollSnapAlign: 'center', position:'relative'}}
            direction={'column'}>
            <ImageSwiper
                urls={settings.cover.urls}
                alt={'Descripción de la imagen'}
                layout={'fill'}
                objectFit = {'cover'}
                height = {'100%'}
                width ={'100%'}
                swiperH ={'100%'}
                swiperW ={'100%'}
            />
            <FlexColumn sx={{
                width: '100%',
                height: '99vh',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 99,
                justifyContent:'space-between',
            }} >
                <FlexColumn center fullWidth spacing={1} padding={2} sx={{ background:'linear-gradient(180deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)' }} >
                    <Typography
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            fontFamily: 'Quicksand',
                            letterSpacing: '.4rem',
                            fontSize: '12px',
                            color: '#fff'
                        }}>
                        GENERACION 2018 - 2023
                    </Typography>
                    <Typography
                        variant={'h4'}
                        sx={{
                            letterSpacing: '.2rem',
                            fontFamily: 'Train One',
                            width: '100%',
                            textAlign: 'center',
                            padding: '12px 0',
                            paddingTop: '4px',
                            color: 'white',
                            fontSize: '28px'
                        }}>
                        ARQUITECTURA
                    </Typography>
                </FlexColumn>
                <FlexColumn fullWidth center >
                    <FlexColumn
                        center
                        sx={{
                            width: '100%',
                            height: '20vh',
                            background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
                            position: 'relative',
                            zIndex: 2
                        }}>
                        <Typography
                            variant={'h4'}
                            sx={{
                                fontWeight: '400',
                                color: 'rgba(255,255,255,100)!important',
                                fontFamily: 'Playfair Display',
                                textAlign: 'center',
                                fontSize: '28px',
                                padding: '0 12px',
                                letterSpacing: '.2rem',
                            }}>
                            Arq. {fullname}
                        </Typography>
                    </FlexColumn>
                    <FlexColumn sx={{padding: '0 24px', background:'rgba(0,0,0,0.7)'}} spacing={3}>
                        <Typography sx={{
                            color: 'rgba(255,255,255,100)!important',
                            textAlign: 'center',
                            fontFamily: 'Quicksand',
                            fontSize: '14px'
                        }}>
                            Te invita cordialmente a celebrar la culminación de un viaje lleno de pasión, dedicación y
                            creatividad.
                        </Typography>
                        <FlexRow center>
                            <Typography variant={'h5'}
                                        sx={{
                                            fontWeight: '600',
                                            color: 'rgba(255,255,255,100)!important',
                                            padding: '18px 0',
                                            borderTop: '2px solid white',
                                            borderBottom: '2px solid white',
                                            letterSpacing: '.4rem',
                                            fontFamily: 'Quicksand'
                                        }}>
                                07 de Julio 20:00
                            </Typography>
                        </FlexRow>
                        <Typography variant={'caption'}
                                    sx={{
                                        color: 'rgba(255,255,255,100)!important',
                                        textAlign: 'center',
                                        fontFamily: 'Quicksand',
                                        fontSize: '14px'
                                    }}>
                            Este es un día para reconocer los largos días de estudio, los proyectos exhaustivos y la innegable
                            contribución al mundo del diseño y la construcción.
                        </Typography>
                    <FlexRow padding={1} ></FlexRow>
                    </FlexColumn>
                </FlexColumn>
            </FlexColumn>
        </MobileScreen>
    );
}
