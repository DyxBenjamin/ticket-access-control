// import React, {useState} from 'react';
// import useNotificationsData from "../../../hooks/data/useNotificationsData";
// import ModalLayout from "../ModalLayout";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import {InputLabel} from "../../../utility/labels/CustomLabels";
// import {TabContext, TabList} from "@mui/lab";
// import {Tab} from "@mui/material";
// import NotificationCard from "./NotificationCard";
// import {registerDeviceOnCloudMessaging} from "../../../utility/push/firebaseCloudMessaging";
// import Skeleton from "@mui/material/Skeleton";
//
// const sx = {
// 	modalContainer: {
// 		display: 'flex',
// 		flexDirection:'column',
// 		gap: '12px',
// 		top: '50%',
// 		left: '50%',
// 		position: 'absolute',
// 		width: {sm: 500, xs: 350},
// 		height: 600,
// 		transform: 'translate(-50%, -50%)',
// 		backgroundColor: 'background.paper',
// 		border: 'none',
// 		boxShadow: 24,
// 		borderRadius: 3,
// 		// padding: {sm: 4, xs: 2},
// 		overflow: 'hidden',
// 		'&:active': {
// 			border: 'none',
// 		}
// 	},
// 	permissionFooter:{
// 		width: '100%',
// 		padding: '1rem',
// 		backgroundColor: 'var(--primary-300)',
// 		borderTop: '2px solid var(--primary-600)',
// 		color: 'white',
// 		justifyContent: 'space-between',
// 		flexDirection: {
// 			sm: 'row',
// 			xs: 'column'
// 		},
// 		alignItems: 'center',
// 	}
// }
//
//
// const NotificationsModal = ({open, handleClose}) => {
// 	const [filter, setFilter] = useState('unread');
// 	const [showNotificationsFooter, setShowNotificationsFooter] = useState(!Boolean(localStorage.getItem('pushNotifications')));
// 	const {notifications, markAsRead, markAllAsRead, changeFilters, update, deviceSupportsNotifications} = useNotificationsData();
// 	const handleChangeFilter = (_event, newFilter) => {
// 		setFilter(newFilter);
// 		changeFilters(newFilter);
// 	}
// 	const handleHide = () => {
// 		localStorage.setItem('pushNotifications', 'hide');
// 		setShowNotificationsFooter(false);
// 	}
// 	const handleEnable = async () => {
// 		await registerDeviceOnCloudMessaging();
// 		setShowNotificationsFooter(false);
// 	}
// 	const onClose = () => {
// 		changeFilters('unread');
// 		setFilter('unread');
// 		handleClose();
// 	}
// 	return (
// 		<ModalLayout
// 			open={open}
// 			onClose={onClose}
// 			header={
// 				<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}
// 					   sx={{width: '100%', padding: '2rem', paddingBottom: '1rem'}}>
// 					<InputLabel
// 						sx={{
// 							fontSize: '24px',
// 							fontWeight: 600,
// 							lineHeight: '32px',
// 							textAlign: 'center',
// 							margin: 0,
// 						}}>
// 						Notifications
// 					</InputLabel>
// 					<Typography
// 						onClick={markAllAsRead}
// 						variant={'body2'}
// 						sx={{textAlign: 'center', textDecoration: 'underline', cursor: 'pointer', color:'var(--primary-600)'}}>
// 						Mark all as read
// 					</Typography>
// 				</Stack>
// 			}
// 			body={
// 				<Stack>
// 					<Box sx={{
// 						display: 'flex',
// 						flexDirection: 'column',
// 						justifyContent: 'space-between',
// 						alignItems: 'center'
// 					}}>
// 						<TabContext value={filter}>
// 							<Box sx={{borderBottom: 1, borderColor: 'divider', width: '100%'}}>
// 								<TabList
// 									variant="fullWidth"
// 									onChange={handleChangeFilter} aria-label="lab API tabs example">
// 									<Tab sx={{textTransform: 'none'}} label="Unread" value="unread"/>
// 									<Tab sx={{textTransform: 'none'}} label="To do's" value="pending"/>
// 									<Tab sx={{textTransform: 'none'}} label="All" value="all"/>
// 								</TabList>
// 							</Box>
// 						</TabContext>
// 					</Box>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'column',
// 							gap: '16px',
// 							padding: '16px 0',
// 							alignItems: 'center',
// 							height: '500px',
// 							overflow: 'scroll'
// 						}}>
// 						{
// 							filter === 'pending' && <NotificationCard notification={{type: 'emptyTodo'}} update={() => update()}/>
// 						}
// 						{
// 							notifications.length === 0 && filter !== 'pending' && <Box sx={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }} >
// 								<Skeleton variant="rectangular" width={210} height={60} />
// 								<Typography variant={'body2'} sx={{color: 'var(--gray-500)'}}>No notifications</Typography>
// 							</Box>
// 						}
// 						{
// 							notifications.map((notification, index) => (
// 								<NotificationCard
// 									key={notification._id}
// 									notification={notification}
// 									update={() => update()}
// 									markAsRead={() => markAsRead(notification._id)}
// 								/>)
// 							)
// 						}
// 					</Box>
// 				</Stack>
// 			}
// 			footer={
// 				showNotificationsFooter && deviceSupportsNotifications ?
// 					<Stack sx={sx.permissionFooter}>
// 						<Typography variant={'subtitle2'} sx={{color: 'white', fontWeight: 'bold'}}>Do you want to enable push notifications?</Typography>
// 						<Stack direction={'row'} spacing={2}>
// 							<Typography
// 								variant={'subtitle2'}
// 								onClick={handleEnable}
// 								sx={{
// 									color: 'white',
// 									fontWeight: 'bold',
// 									cursor: 'pointer',
// 									textDecoration: 'underline'
// 								}}>
// 								Enable
// 							</Typography>
// 							<Typography
// 								variant={'subtitle2'}
// 								onClick={handleHide}
// 								sx={{
// 									color: 'white',
// 									fontWeight: 'bold',
// 									cursor: 'pointer',
// 									textDecoration: 'underline'
// 								}}>
// 								Hide this
// 							</Typography>
// 						</Stack>
// 					</Stack>
// 					:
// 					null
// 			}
// 		/>
// 	)
// }
//
// export default NotificationsModal;
