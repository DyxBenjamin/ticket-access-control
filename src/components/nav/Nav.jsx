import React from 'react';
import {Box, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";
import _ from 'lodash';

const styles= {
	tab: {
    background:'transparent',
    width:'100%', 
    borderRadius:'16px', 
    display:'flex', 
    alignItems:'center', 
    padding:'12px 24px',
    boxSizing:'border-box', 
    cursor:'pointer',
    fontWeight:'500',
	}
}

const Routes = [
	{
		name: 'tab 1',
		path: '/app/tab1',
		icon: <></>,
	},
	{
		name: 'tab 2',
		path: '/app/tab2',
		icon: <></>,
	},
	{
		name: 'tab 3',
		path: '/app/tab3',
		icon: <></>,
	},
	{
		name: 'Tab 4',
		path: '/app/tab4',
		icon: <></>,
	},
	{
		name: 'Profile',
		path: '/app/profile',
		icon: <></>,
	}
]



export default function Nav({children}) {
	const router = useRouter();

	function isActiveRoute(route) {
		return router.pathname.includes(route);
	}

	return (
		<main style={{width: '100vw', height:'100vh', display:'flex', flexDirection:'row'}} >
			<Box sx={{ width:'300px', height:'100%', padding:'0 14px', background:"black", borderRight:'2px solid #333333' }} >
				<Box sx={{ height:'100px', display:'grid', placeContent:'center' }} >
					<Link href={'/app/main'} style={{textDecoration:'none'}} >
						<Typography variant={'h5'} >
							DevClusters
						</Typography>
					</Link>
				</Box>
				<Box sx={{ display:'flex', flexDirection:'column', gap:'14px',  }} >
					{
						_.map( Routes, (route, index) => {
							return(
								<Link href={route.path} key={index} style={{textDecoration:'none', fontWeight:'bold'}}  >
									<Box sx={{ ...styles.tab, background: isActiveRoute(route.path) ? '#79ee94' : 'transparent', color: isActiveRoute(route.path) ? 'white' : '#2e733e' }} >
										{route.icon}
										<Typography variant={'body1'}>
											{route.name}
										</Typography>
									</Box>
								</Link>
							)
						})
					}
				</Box>
			</Box>
			<Box sx={{ width: '100%', height:'100%', display:'flex' }} >
				{children}
			</Box>
		</main>
	)
}
