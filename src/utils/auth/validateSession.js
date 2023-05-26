/* eslint-disable react-hooks/rules-of-hooks */
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default async function validateSession() {
    const router = useRouter()
    await useSession({
        required: true,
        onUnauthenticated() {
            router.push('/auth/signin')
        },
    })
}
