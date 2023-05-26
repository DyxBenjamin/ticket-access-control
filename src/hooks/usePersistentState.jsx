import { entity, persistence } from 'simpler-state';
import { useState } from 'react';

const entities = {
	// exampleEntity: entity(20, [persistence(`ClientPlansTableLimit`)]),
	activeTab: entity('Citas', [persistence(`activeTab`)]),
}

export default function usePersistentState(key){
	const [change, setChange] = useState(0)
	const state = entities[key].get()
	function setState(value) {
		entities[ key ].set( value );
		setChange( change + 1 );
	}
	return [state, setState];
}
