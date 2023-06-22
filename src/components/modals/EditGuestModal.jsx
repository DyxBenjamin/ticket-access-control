import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import TextInput from "@components/forms/TextInput";
import {useObjectState} from "@uidotdev/usehooks";
import Serverless from "@srclib/devclusters/ServerlessConector";


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
export default function EditGuestModal({open, onClose, onSuccess, guest}) {
    const {profile: preFetchUser} = guest;
    const [profile, setProfile] = useObjectState(preFetchUser);

    const handleEdit = (key, value) => {
        setProfile({[key]: value});
    }

    const updateGuest = async () => {
        const payload = {
            collection: 'guests',
            selector:{
                _id: guest._id
            },
            modifier:{
                $set:{
                    profile
                }
            },
            singleton: false,
            upsert: false
        }
        await Serverless.updateData(payload);
        onSuccess();
    }



    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box>
                <FlexColumn sx={css.container} center={'horizontal'} spacing={2} fullWidth>
                    <Typography>
                        Editar invitado
                    </Typography>
                    <TextInput
                        label={"Nombre"}
                        value={profile.name}
                        onChange={(e) => handleEdit('name', e.target.value)}
                        color={'#fff'}
                        fullWidth/>
                    <TextInput
                        label={"Segundo nombre"}
                        value={profile.secondName}
                        onChange={(e) => handleEdit('secondName', e.target.value)}
                        color={'#fff'}
                        fullWidth/>
                    <TextInput
                        label={"Apellido"}
                        value={profile.lastName}
                        onChange={(e) => handleEdit('lastName', e.target.value)}
                        color={'#fff'}
                        fullWidth/>
                    <TextInput
                        label={"Segundo apellido"}
                        value={profile.secondLastName}
                        onChange={(e) => handleEdit('secondLastName', e.target.value)}
                        color={'#fff'}
                        fullWidth/>
                    <Button variant={'contained'} fullWidth onClick={updateGuest} >Guardar</Button>
                    <Typography variant={'caption'} sx={{ textAlign:'center' }} >
                        Las invitaciones se generan de forma estatica. <br/> Si no visualizas los cambios <br/> recarga la invitación.
                    </Typography>
                </FlexColumn>
            </Box>
        </Modal>
    );
}
