import { styled } from "@material-ui/core/styles"

import { useTheme, Button, Link, Menu, MenuProps, makeStyles, Box } from "@material-ui/core"
import { WbSunny, Brightness3 } from "@material-ui/icons"
import { Link as RouterLink } from "react-router-dom"

import logoLight from "./img/logo-light.png"
import logoDark from "./img/logo-dark.png"

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexFlow: "row wrap",
        alignItems: "center",
        gap: theme.spacing(0),
		padding: 0,
		marginTop: 0,
	},

	menu: {
        // border: `2px solid ${theme.palette.secondary.main}`,
		borderRadius: 10,
	},

	menuItems: {
		display: "flex",
		justifyContent: "space-around",
		flexDirection: "row",
		flexFlow: "row wrap",
		alignItems: "center",
		gap: theme.spacing(2),

		[theme.breakpoints.down('xs')]: {
			display: "none"
		},
	},

	darkModeSwitch: {
		display: 'flex',
		alignItems: 'center',
	},

	rightItmesContainer: {
		paddingTop: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingBottom: theme.spacing(2),

		display: "flex",
		justifyContent: "flex-end",
		gap: theme.spacing(2),
	},
	
}))




export interface ConnectedInfo {
	chainId: number | undefined,
	account: string | undefined
}

interface HeaderProps {
	lightTheme: boolean,
	toggleTheme: (isLight: boolean) => void,
}


export const Header = ({ lightTheme, toggleTheme }: HeaderProps) => {

	const classes = useStyles()
	const theme = useTheme();
	const lightMode = theme.palette.type === 'light'
	const logoImg = lightMode ? logoLight : logoDark


	const handleModeChange = () => {
		localStorage.setItem("theme", lightTheme ? 'dark' : 'light');
		toggleTheme(!lightTheme);
	};

	return (

		<header>

			<Box className={classes.container}>

				<Link component={RouterLink} to="/" >
					<Button> <img src={logoImg} style={{ width: 155, height: 34 }} alt="logo" /> </Button>
				</Link>
				
				<div className={classes.rightItmesContainer}>
					<div className={classes.darkModeSwitch} >
						{ lightMode &&  <Brightness3 color='primary' onClick={handleModeChange} /> }
						{ !lightMode &&   <WbSunny color='primary' onClick={handleModeChange} /> }
					</div>
				</div> 
					
			</Box>

		</header>
	)
}