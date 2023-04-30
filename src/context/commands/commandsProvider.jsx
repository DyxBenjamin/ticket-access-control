import React, { createContext, useEffect, useState } from 'react';
import userCommands from './userCommands.js';

export const CommandContext = createContext(undefined);

const commands = {
	...userCommands
}
export const CommandProvider = ({ children }) => {
	const [showConfirmModal, setShowConfirmModal] = useState(null);
	const [command, setCommand] = useState(null);
	// const [shortcuts, setShortcuts] = useState([]);
	
	useEffect(() => {
		if (!command) { return }
		if ( command.args?.notConfirm){
			executeCommand();
		} else {
			askForConfirmation();
		}
	}, [command]);
	
	// const handleShortcuts = (e) => {
	// 	if (!e.metaKey) { return }
	// 	if (!shortcuts) { return }
	// 	const shortcut = shortcuts.find(shortcut => shortcut.key === e.key);
	// 	if (!shortcut) { return }
	// 	shortcut.action();
	// };
	//
	// useEffect( () => {
	// 	window.addEventListener('keydown', handleShortcuts);
	// 	return () => {
	// 		window.removeEventListener('keydown', handleShortcuts);
	// 	};
	// }, []);
	//
	// const addShortcut = (shortcut) => {
	// 	setShortcuts(shortcuts.push(shortcut));
	// }
	
	function clearModal (){
		setCommand(null)
		setShowConfirmModal(null);
	}
	function askForConfirmation(){
		const { type, args } = command
		const modalConfig = commands[type](args).modalConfig;
		setShowConfirmModal(modalConfig);
	}
	function executeCommand(modalPayload){
		const { type, args } = command
		commands[type](args, clearModal).onConfirm(modalPayload);
	}
	
	const cancelCommand = clearModal
	
	return (
		<CommandContext.Provider
			value={{ command, setCommand, showConfirmModal, executeCommand, cancelCommand }}>
			{children}
		</CommandContext.Provider>
	);
};
