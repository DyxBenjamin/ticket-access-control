const BreakpointsEnum ={
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
	xl: '1600px',
	xxl: '1920px',
}

const parceMediaQuery = (key) => {
	return `@media (min-width: ${BreakpointsEnum[key]})`
}

const MediaQueries = {
	xs: parceMediaQuery('xs'),
	sm: parceMediaQuery('sm'),
	md: parceMediaQuery('md'),
	lg: parceMediaQuery('lg'),
	xl: parceMediaQuery('xl'),
	xxl: parceMediaQuery('xxl')
};

export default MediaQueries;
