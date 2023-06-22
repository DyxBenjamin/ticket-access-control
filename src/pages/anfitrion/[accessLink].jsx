import React from 'react';
import FullContain from "@components/layouts/FullContain";
import Invitados from "@components/pages/anfitrion/Invitados";
import fetchStaticData from "@utils/fetchStaticData";
import useReactiveData from "@hooks/useReactiveData";
import Customizer from "@components/pages/anfitrion/Customizer";


export default function AccessLink({preFetchUser}) {

    const {data: user, update: updateUserData} = useReactiveData({
        collection: 'users',
        singleton: true,
        filters: {'accessLink': preFetchUser.accessLink},
        links: true,
        defaultData: preFetchUser,
        debug: true,
        deps: [preFetchUser.accessLink],
    })


    return (
        <FullContain
            sx={{
                background: 'black',
                scrollSnapType: 'y mandatory',
                alignItems: 'center',
            }}>
            <Customizer user={user} updateUser={updateUserData} />
            <Invitados user={user} updateUser={updateUserData}/>
        </FullContain>
    )
}

export async function getServerSideProps(context) {
    const {accessLink} = context.params;
    const preFetchUser = await fetchStaticData({
        collection: 'users',
        singleton: true,
        filters: {
            'accessLink': accessLink
        },
        links: true
    })

    if (!preFetchUser) {
        return {
            redirect: {
                destination: '/anfitrion/inexistente',
                permanent: false,
            },
        }
    }

    return {props: {preFetchUser}};
}
