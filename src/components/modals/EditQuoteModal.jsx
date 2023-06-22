import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import TextInput from "@components/forms/TextInput";
import {useObjectState} from "@uidotdev/usehooks";
import Serverless from "@srclib/devclusters/ServerlessConector";
import CloudinaryWidgetWrapper from "@components/forms/CloudinaryWidgetWrapper";


const css = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        background: '#070020',
        borderRadius: '12px',
        padding: '35px',
        boxSizing: 'border-box',
        border: '4px solid white',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    }
}

export default function EditQuoteModal({open, onClose, user, quoteNumber, onSuccess}) {
    const {settings: preFetchSettings} = user;

    const [quote, setQuote] = useObjectState(preFetchSettings?.quotes[quoteNumber]);

    const handleEdit = (key, value) => {
        setQuote({[key]: value});
    }

    const updateQuote = async () => {
        const settings = preFetchSettings || {};
        settings.quotes[quoteNumber] = quote;

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
        onSuccess();
    }

    const handleUploadPhoto = (imageInfo) => {
        handleEdit('url', imageInfo.secure_url);
    }

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box>
                <FlexColumn sx={css.container} center={'horizontal'} spacing={2} fullWidth>
                    <Typography>
                        Editar frase
                    </Typography>
                    <Typography>
                        Frase { Number(quoteNumber) + 1}
                    </Typography>
                    <TextInput
                        label={"Frase"}
                        value={quote?.text || ''}
                        onChange={(e) => handleEdit('text', e.target.value)}
                        color={'#fff'}
                        fullWidth
                        textArea
                    />
                    <TextInput
                        label={"Autor"}
                        value={quote?.author || ''}
                        onChange={(e) => handleEdit(`author`, e.target.value)}
                        color={'#fff'}
                        fullWidth/>
                    <CloudinaryWidgetWrapper
                        path={`users/${user.accessLink}/quotes`}
                        publicId={`${user.accessLink}-quote-${quoteNumber}`}
                        onSuccess={handleUploadPhoto} >
                        <Button variant={'contained'} fullWidth>Cambiar fotografia</Button>
                    </CloudinaryWidgetWrapper>
                    <Button variant={'contained'} fullWidth onClick={updateQuote}>Guardar</Button>
                    <Typography variant={'caption'} sx={{ textAlign:'center' }} >
                        Las invitaciones se generan de forma estatica. <br/> Si no visualizas los cambios <br/> recarga la invitación.
                    </Typography>
                </FlexColumn>
            </Box>
        </Modal>
    );
}

