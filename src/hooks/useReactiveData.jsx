import { useEffect, useState } from 'react';
import _ from 'lodash';


export default function useReactiveData( {
	route,
	singleton,
	filters,
	projection,
	settings,
	links,
	defaultData = {},
	refreshInterval = false,
	debug = false,
	deps
} ) {
	const [ data, setData ] = useState( null );
	const [ refresh, setRefresh ] = useState( 0 );
	
	useEffect( () => {
		if ( refreshInterval !== false ) {
			const interval = setInterval( () => {
				setRefresh( ( refresh ) => refresh + 1 );
			}, refreshInterval );
			return () => clearInterval( interval );
		}
	}, [ refreshInterval ] );
	
	useEffect( () => {
		const haveNullDeps = _.some( deps, ( dep ) => {
			return _.isNull( dep ) || _.isUndefined( dep );
		} );
		
		if ( !haveNullDeps ) {
			fetch( `http://localhost:3000/api/v1/${ route }`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify( {
					singleton,
					filters,
					projection,
					settings,
					links
				} )
			} )
				.then( ( res ) => res.json() )
				.then( ( data ) => setData( data.result ) )
				.catch( ( err ) => console.error( err ) );
		}
	}, [ ...deps, refresh ] );
	
	useEffect( () => {
		if ( debug && data ) {
			debugLog();
		}
	}, [ data ] );
	
	if ( !data ) {
		return defaultData;
	}
	
	
	function debugLog() {
		console.log( `------------------------ Server ${ route } ------------------------` );
		console.log( 'data', data );
		console.log( 'singleton', singleton );
		console.log( 'filters', filters );
		console.log( 'projection', projection );
		console.log( 'settings', settings );
		console.log( 'links', links );
		console.log( 'defaultData', defaultData );
		console.log( 'refreshInterval', refreshInterval );
		console.log( 'debug', debug );
		console.log( 'deps', deps );
		console.log( '-----------------------------------------------------------------' );
	}
	
	
	return data;
}
