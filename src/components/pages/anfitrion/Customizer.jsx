import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import MobileScreen from "@components/layouts/MobileScreen";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";
import _ from "lodash";
import EditQuoteModal from "@components/modals/EditQuoteModal";
import useToggle from "@hooks/useToogle";
import CloudinaryWidgetWrapper from "@components/forms/CloudinaryWidgetWrapper";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Serverless from "@srclib/devclusters/ServerlessConector";

const css = {
    skeleton: {minWidth: '100px', height: '150px', background: 'gray', borderRadius: '8px', overflow: 'hidden', position:'relative'},
    iconWrapper:{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 99, padding: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)'}
}

export default function Customizer({user, updateUser}) {
    const [showEditQuoteModal, toggleShowEditQuoteModal] = useToggle(false);
    const [quoteToEdit, setQuoteToEdit] = React.useState(null);


    const defaultSettings = {
        cover: {
            type: "image",
            urls: ["https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1600","https://images.pexels.com/photos/3779828/pexels-photo-3779828.jpeg?auto=compress&cs=tinysrgb&w=1600"]
        },
        quotes: [
            {
                text: '“Somos moldeados y modelados por lo que amamos.”',
                author: 'Audrey Hepburn',
                imgUrl: ' https://images.pexels.com/photos/15792907/pexels-photo-15792907/free-photo-of-cielo-ramas-techo-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                text: '“La arquitectura no es una profesión para los impacientes.”',
                author: 'Peter Eisenman',
                imgUrl: 'https://images.pexels.com/photos/3317535/pexels-photo-3317535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    }

    const settings = user?.settings || defaultSettings;

    const handleEditQuote = (quote) => {
        setQuoteToEdit(quote);
        toggleShowEditQuoteModal();
    }

    const handleUpdateQuote = () => {
        toggleShowEditQuoteModal();
        updateUser();
    }

    const handleUpdateCover = async (imageInfo, index) => {
        const settings = user.settings || {};
        settings.cover.urls[index] = imageInfo.secure_url;

        const payload = {
            collection: 'users',
            selector: {
                _id: user._id
            },
            modifier: {
                $set: {
                    settings
                }
            },
            singleton: false,
            upsert: false
        }
        await Serverless.updateData(payload);
        updateUser();
    }

    return (
        <MobileScreen
            sx={{border: '4px solid white', background: '#070020', scrollSnapAlign: 'center'}}
            direction={'column'}>
            <FlexColumn center fullWidth spacing={2} padding={4}>
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
                                Carga hasta 3 imagenes para personalizar la pantalla principal de tu invitación
                            </Typography>
                        </FlexColumn>
                    </FlexColumn>
                    <FlexRow fullWidth center>
                        <CloudinaryWidgetWrapper
                            path={`users/${user.accessLink}/covers`}
                            publicId={`${user.accessLink}-cover-0`}
                            onSuccess={(imageInfo) => handleUpdateCover(imageInfo, 0) } >
                            <Box sx={css.skeleton}>
                                <FlexColumn center sx={css.iconWrapper}>
                                    <UploadFileIcon fontSize={'large'} sx={{color:'white!important'}}/>
                                </FlexColumn>
                                <DynamicSizeNextImage
                                    src={settings.cover.urls[0] ?? 'https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                                    width={'100%'} height={'100%'}/>
                            </Box>
                        </CloudinaryWidgetWrapper>
                        <CloudinaryWidgetWrapper
                            path={`users/${user.accessLink}/covers`}
                            publicId={`${user.accessLink}-cover-1`}
                            onSuccess={(imageInfo) => handleUpdateCover(imageInfo, 1) } >
                            <Box sx={css.skeleton}>
                                <FlexColumn center sx={css.iconWrapper}>
                                    <UploadFileIcon fontSize={'large'} sx={{color:'white!important'}}/>
                                </FlexColumn>
                                <DynamicSizeNextImage
                                    src={settings.cover.urls[1] ?? 'https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                                    width={'100%'} height={'100%'}/>
                            </Box>
                        </CloudinaryWidgetWrapper>
                        <CloudinaryWidgetWrapper
                            path={`users/${user.accessLink}/covers`}
                            publicId={`${user.accessLink}-cover-2`}
                            onSuccess={(imageInfo) => handleUpdateCover(imageInfo, 2) } >
                            <Box sx={css.skeleton}>
                                <FlexColumn center sx={css.iconWrapper}>
                                    <UploadFileIcon fontSize={'large'} sx={{color:'white!important'}}/>
                                </FlexColumn>
                                <DynamicSizeNextImage
                                    src={settings.cover.urls[2] ?? 'https://images.pexels.com/photos/1840806/pexels-photo-1840806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                                    width={'100%'} height={'100%'}/>
                            </Box>
                        </CloudinaryWidgetWrapper>
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
                        {_.map(settings.quotes, (quote, index) => (
                            <FlexRow key={index} fullWidth center={'vertical'}>
                                <Box sx={css.skeleton}>
                                    <DynamicSizeNextImage src={quote.url} width={'100%'} height={'100%'}/>
                                </Box>
                                <FlexColumn fullWidth spacing={2}>
                                    <FlexColumn>
                                        <Typography>
                                            {quote.text}
                                        </Typography>
                                        <Typography variant={'caption'}>
                                            {quote.author}
                                        </Typography>
                                    </FlexColumn>
                                    <Button onClick={() => handleEditQuote(index)} variant={'outlined'}>Editar</Button>
                                </FlexColumn>
                            </FlexRow>
                        ))}
                    </FlexColumn>
                </FlexColumn>
            </FlexColumn>
            {showEditQuoteModal &&
                <EditQuoteModal
                    open={showEditQuoteModal}
                    onClose={toggleShowEditQuoteModal}
                    onSuccess={handleUpdateQuote}
                    user={user}
                    quoteNumber={quoteToEdit}/>}
        </MobileScreen>
    );
}
