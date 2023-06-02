/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";
import _ from 'lodash';
import FlexRow from "@components/layouts/FlexRow";
import Logo from "@assets/images/DevClustersLogo.png";
import Image from "next/image";
import FlexColumn from "@components/layouts/FlexColumn";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExploreIcon from '@mui/icons-material/Explore';
import AssistantIcon from '@mui/icons-material/Assistant';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Fullscreen from "@components/layouts/Fullscreen";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51LQI4ZKrIfQBoZAFlzh0ysY7Gj6ZYxqC1qigICTUTNhi7VvUqdzVK6FDXMwsZruXkKWRuLPtTUWL4FqfTPGxZrl7007ie13QQT');

const Routes = [
	{
		name: 'Home',
		path: '/app',
		icon: <HomeIcon />,
	},
	{
		name: 'tab 2',
		path: '/app/tab2',
		icon: <ExploreIcon />,
	},
	{
		name: 'Assistant',
		path: '/app/tab3',
		icon: <AssistantIcon />,
	},
	{
		name: 'Shop',
		path: '/app/shop',
		icon: <ShoppingBagIcon />,
	},
	{
		name: 'Me',
		path: '/app/profile',
		icon: <PersonIcon />,
	}
]
function isActiveRoute(route) {
	const router = useRouter();
	return router.pathname.includes(route);
}
function TabsNavigation({children}){
	const css = {
		navContainer:{
			height:'60px',
			padding: '0 12px',
			borderRadius:'0 0 16px 16px ',
			justifyContent:'space-between',
			background:'white',
			position:'fixed',
			top:'0',
			left:'0',
			boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
			zIndex:'1000'
		},
		footerContainer:{
			margin:'8px 12px',
			width:'calc(100% - 24px)',
			borderRadius:'16px',
			height:'60px',
			background:'white',
			position:'fixed',
			bottom:'0',
			left:'0',
			boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
			zIndex:'1000'
		},
		tab:{
			background:'transparent',
			width:'20%',
			height:'100%',
			borderRadius:'16px',
			display:'flex',
			alignItems:'center',
			justifyContent: 'center',
			padding:'12px',
			boxSizing:'border-box',
			cursor:'pointer',
			fontWeight:'500',
			textAlign:'center',
		}
	}


	return(
		<>
			<FlexRow spacing={0} fullWidth sx={css.navContainer} >
				<Box sx={{ width:'50px', height:'50px', display:'grid', placeContent:'center', borderRadius:'50%' }} >
					<NotificationsIcon sx={{ color:'gray' }} />
				</Box>
				<FlexRow >
					<Image
						src={Logo}
						alt="DevClusters Logo"
						width={32}
						height={32}
						priority
					/>
					<Typography variant={'h6'} sx={{color:'black!important'}} >
						DevClusters
					</Typography>
				</FlexRow>
				<Box sx={{ width:'50px', height:'50px', display:'grid', placeContent:'center', borderRadius:'50%' }} >
					<WidgetsIcon sx={{ color:'gray' }}  />
				</Box>
			</FlexRow>
			<Fullscreen sx={{
				padding:'72px 12px 70px 12px',
			}} >
				{children}
			</Fullscreen>
			<FlexRow spacing={0} sx={css.footerContainer} >
				{
					_.map( Routes, (route, index) => {
						return(
							<Link href={route.path} key={index} style={{textDecoration:'none', fontWeight:'bold', ...css.tab}}  >
								<FlexColumn fullWidth spacing={0} sx={{background: isActiveRoute(route.path) ? '#e2f6e8' : 'transparent',  color: isActiveRoute(route.path) ? 'white' : '#2e733e', borderRadius:'8px'}} >
									{route.icon}
								</FlexColumn>
							</Link>
						)
					})
				}
			</FlexRow>
		</>
	)
}



export default function Navigation({children}) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	const options = {
		clientSecret: process.env.STRIPE_SECRET_KEY
	};

	if(!matches){
		return (
			<TabsNavigation>
				<Elements stripe={stripePromise} options={options}>
					{children}
				</Elements>
			</TabsNavigation>
		)
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
									<Box sx={{ background: isActiveRoute(route.path) ? '#79ee94' : 'transparent', color: isActiveRoute(route.path) ? 'white' : '#2e733e' }} >
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
				<Elements stripe={stripePromise} options={options}>
					{children}
				</Elements>
			</Box>
		</main>
	)
}
