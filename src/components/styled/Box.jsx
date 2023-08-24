import React from 'react'
import styled from '@emotion/styled'
export default function Box({as, sx, ...rest}){
	const Component = ({ className }) => React.createElement(as, {...rest, className})
	const Box = styled(Component)`
		box-sizing: border-box;
		margin: 0;	
	  	padding: 0;
		min-width: 0;
	  	${sx}
	`
	return <Box />
}
