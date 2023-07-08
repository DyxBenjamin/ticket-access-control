import React, {useState} from 'react';
import {QrReader} from "react-qr-reader";
import useReactiveData from "@hooks/useReactiveData";
import FlexRow from "@components/layouts/FlexRow";
import Ticket from "@components/pages/invitation/Ticket";
import {useToggle} from "@uidotdev/usehooks";
import {Button} from "@mui/material";

const css = {
	app: {}
}

export default function App({...props}) {
	const [userId, setUserId] = useState('');
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
			<Button onClick={scan} >
				Scan
			</Button>
			{scan &&
				<QrReader
					onResult={(result, error) => {
						if (!!result) {
							setUserId(result?.text);
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
						userId === 'undefined' ?
							<p>El código QR no es válido</p>
							:
							<Ticket guest={guest} updateGuest={updateGuestsData}/>
					}
				</FlexRow>
			}
		</>
	)
}
