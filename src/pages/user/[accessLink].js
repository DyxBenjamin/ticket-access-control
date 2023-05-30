import React from 'react';
import { useRouter } from 'next/router';

export default function AccessLink() {
	const router = useRouter();
	const { accessLink } = router.query;
	
	return (
		<>
			<h1>Access Link: {accessLink}</h1>
		</>
	)
}
