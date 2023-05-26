
function deleteUser( args, clearModal) {
	return {
		modalConfig: {
			open: true,
			title: 'Delete User',
			descriptionMsg: `Are you sure you want delete this user?`,
			confirmMsg: 'Delete',
			loadingMsg: 'Deleting...',
		},
		onConfirm: ()=> {
			console.log( '%c << 📌 user >>', 'color: white; font-size: 12px' );
		}
	}
}

const userCommands = {
	deleteUser,
}

export default userCommands;
