import { useEffect, useState } from 'react';
import _ from 'lodash';
import Serverless from "@srclib/devclusters/ServerlessConector";
import {useCounter} from "@uidotdev/usehooks";


export default function useReactiveData( {
	collection,
	singleton,
	conector = Serverless,
	filters,
	projection,
	settings,
	pagination, // TODO: implement pagination, the pagination object should be like this: { page: 1, limit: 10 } and the response should be like this: { data: [], total: 100, pages: 10, currentPage: 1 }
	links,
	defaultData = {},
	refreshInterval = false,
	debug = false,
	deps
} ) {
	const [ data, setData ] = useState( null );
	const [refreshCount, { increment: incrementRefresh }] = useCounter(0);
	
	useEffect( () => {
		if ( refreshInterval !== false ) {
			const interval = setInterval( () => {
				incrementRefresh();
			}, refreshInterval );
			return () => clearInterval( interval );
		}
	}, [ refreshInterval ] );
	
	useEffect( () => {
		const haveNullDeps = _.some( deps, ( dep ) => {
			return _.isNull( dep ) || _.isUndefined( dep );
		} );
		( async () => {
		if ( !haveNullDeps ) {
			const data = await conector.fetchStaticData({ collection, singleton, filters, projection, settings, links });
			setData( data );
		}} )();
	}, [ ...deps, refreshCount ] );
	
	useEffect( () => {
		if ( debug && data ) {
			debugLog();
		}
	}, [ data ] );
	
	if ( !data ) {
		return { data: defaultData };
	}

	function debugLog() {
		console.log( `------------------------ ${conector.name} ${ collection } ------------------------` );
		console.log( 'data', data );
		console.log( 'singleton', singleton );
		console.log( 'filters', filters );
		console.log( 'projection', projection );
		console.log( 'settings', settings );
		console.log( 'links', links );
		console.log( 'defaultData', defaultData );
		console.log( 'refreshInterval', refreshInterval );
		console.log( 'refreshCount', refreshCount );
		console.log( 'debug', debug );
		console.log( 'deps', deps );
		console.log( '-----------------------------------------------------------------' );
	}

	return { data, update: incrementRefresh  };
}
