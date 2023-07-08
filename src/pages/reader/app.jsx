import React, {useState} from 'react';
import {QrReader} from "react-qr-reader";
import useReactiveData from "@hooks/useReactiveData";
import FlexRow from "@components/layouts/FlexRow";
import Ticket from "@components/pages/invitation/Ticket";
import {useToggle} from "@uidotdev/usehooks";
import {Button} from "@mui/material";


export default function App({...props}) {
	const [userId, setUserId] = useState('undefined');
	const [scan, toggleScan] = useToggle(false)

	const {data: guest, update: updateGuestsData} = useReactiveData({
		collection: 'guests',
		singleton: true,
		filters: {'_id': userId},
		links: true,
		defaultData: {},
		debug: true,
		deps: [userId],
	})


	return (
		<>
			<Button onClick={toggleScan} >
				Scan
			</Button>
			{scan &&
				<QrReader
					onResult={(result, error) => {
						if (!!result) {
							setUserId(result?.text);
							toggleScan();
						}
						if (!!error) {
							setUserId('undefined');
						}
					}}
					style={{width: '100%'}}
				/>
			}
			{guest &&
				<FlexRow>
					{
						(userId === 'undefined' || userId === '') ?
							<p>El código QR no es válido</p>
							:
							<Ticket guest={guest} updateGuest={updateGuestsData}/>
					}
				</FlexRow>
			}
		</>
	)
}
