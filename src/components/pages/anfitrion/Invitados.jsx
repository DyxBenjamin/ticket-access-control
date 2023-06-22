import React, {useState} from 'react';
import {Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";
import _ from 'lodash';
import FlexRow from "@components/layouts/FlexRow";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import {useCopyToClipboard, useToggle} from "@uidotdev/usehooks";
import MobileScreen from "@components/layouts/MobileScreen";
import EditGuestModal from "@components/modals/EditGuestModal";
import {notifySuccess} from "@utils/Notify";


const css = {
    WhatsAppIcon: {
        color: 'green!important',
        cursor: 'pointer',
        '&:hover': {
            color: 'lightgreen!important'
        }
    },
    ContentCopyIcon: {
        color: 'lightgray!important',
        cursor: 'pointer',
        '&:hover': {
            color: 'white!important'
        }
    }
}
export default function Invitados({user, updateUser}) {
    const [_copiedText, copyToClipboard] = useCopyToClipboard();
    const [showEditGuestModal, toggleShowEditGuestModal] = useToggle(false)
    const [guestToEdit, setGuestToEdit] = useState(null)

    const shareToWhatsapp = (route) => {
        const url = `https://api.whatsapp.com/send?text=${route}`;
        window.open(url, '_blank');
    }

    const renderGuests = () => {
        const {guests} = user;
        return _.map(guests, (guest, index) => {
            const {profile} = guest;
            const shareRoute = `https://ticket-access-control.aritectura.com/invitados/${user.accessLink}/${guest.accessLink}`;

            const handleEditGuest = () => {
                setGuestToEdit(guest)
                toggleShowEditGuestModal()
            }

            const fullName = `${profile.name} ${profile.secondName ?? ''} ${profile.lastName} ${profile.secondLastName ?? ''}`;
            return (
                <FlexRow key={index} fullWidth sx={{color: 'white', justifyContent: 'space-between'}}>
                    <Typography>
                        {fullName}
                    </Typography>

                    <FlexRow spacing={2}>
                        <EditIcon sx={css.ContentCopyIcon} onClick={handleEditGuest} />
                        <WhatsAppIcon onClick={() => shareToWhatsapp(shareRoute)} sx={css.WhatsAppIcon}/>
                        <ContentCopyIcon onClick={() => copyToClipboard(shareRoute)} sx={css.ContentCopyIcon}/>
                    </FlexRow>
                </FlexRow>
            )
        })
    }

    const onSuccessUpdateGuest = () => {
        updateUser()
        notifySuccess('Data updated successfully');
        toggleShowEditGuestModal()
    }

    return (
        <MobileScreen
            sx={{border: '4px solid white', background: '#070020', scrollSnapAlign: 'center'}}
            direction={'column'}>
            <FlexColumn center fullWidth spacing={2} padding={4}>
                <Typography variant={'h6'}> Mis invitados </Typography>
                <FlexColumn fullWidth spacing={1} padding={2} sx={{height: '80vh', overflow: 'scroll'}}>
                        {renderGuests()}
                </FlexColumn>
            </FlexColumn>
            {guestToEdit && <EditGuestModal open={showEditGuestModal} onClose={toggleShowEditGuestModal} guest={guestToEdit} onSuccess={onSuccessUpdateGuest}/>}
        </MobileScreen>
    );
}
