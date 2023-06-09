import {createTheme} from "@mui/material";

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#12A76C',
		},
		secondary: {
			main: '#337ab7',
		},
		white:{
			main: '#FFF',
		},
		black:{
			main: '#000',
		}
	},
	components:{
		MuiTypography:{
			styleOverrides:{
				root:{
					color: '#FFF',
				}
			}
		}
	}
});

export default defaultTheme;
